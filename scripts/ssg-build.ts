// SSG Build Script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build, createServer } from 'vite';
import dotenv from 'dotenv';
import { createClient } from 'contentful';
// Import the generateStaticData function from generate-static-data.ts
import { generateStaticData } from './generate-static-data.ts';
// Import the generateSitemap function
import generateSitemap from './generate-sitemap.ts';

// Load environment variables
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'dist');

// Define interfaces
interface Route {
  path: string;
}

interface SSGRoutes {
  routes: string[];
}

// Load predefined routes from JSON file
const routesFilePath = path.join(root, 'src', 'data', 'ssg-routes.json');
const staticRoutes: string[] = JSON.parse(fs.readFileSync(routesFilePath, 'utf-8')).routes;

// Import the generateSlugFromTitle function from utils
// Since we can't directly import TypeScript in Node.js without transpilation,
// we use the same implementation as in src/utils/string.ts
let generateSlugFromTitle: (title: string) => string;

async function importUtils(): Promise<void> {
  try {
    // For a more structured approach, we would use ts-node or a build step
    // but for simplicity, using the same implementation directly
    generateSlugFromTitle = function(title: string): string {
      return title
        .toLowerCase()                // Convert to lowercase
        .replace(/[^\w\s-]/g, '')     // Remove special characters
        .replace(/\s+/g, '-')         // Replace spaces with dashes
        .replace(/--+/g, '-')         // Replace multiple dashes with single dash
        .trim()                       // Trim leading/trailing spaces
        .replace(/^-+|-+$/g, '');     // Remove leading/trailing dashes
    };
  } catch (error) {
    console.error('Error setting up utilities:', error);
    process.exit(1);
  }
}

// Fetch district IDs from Contentful to generate district detail routes
async function fetchDistrictIds(): Promise<string[]> {
  console.log('Fetching district IDs from Contentful...');
  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT as string || 'master',
  });

  try {
    const entries = await client.getEntries({
      content_type: 'district',
    });
    
    return entries.items.map(item => `/district/${item.fields.id as string}`);
  } catch (error) {
    console.error('Error fetching district IDs:', error);
    return [];
  }
}

// Fetch event slugs from Contentful to generate event detail routes
async function fetchEventSlugs(): Promise<string[]> {
  console.log('Fetching event slugs from Contentful...');
  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT as string || 'master',
  });

  try {
    // Fetch featured events
    const featuredEntries = await client.getEntries({
      content_type: 'featuredEvent',
    });
    
    // Fetch events
    const eventsEntries = await client.getEntries({
      content_type: 'event',
    });
    
    // Combine and process all events
    const allEvents = [...featuredEntries.items, ...eventsEntries.items];
    
    // Generate slug-based routes only
    const eventSlugs = allEvents.map(item => {
      const title = (item.fields.title as string) || 'Event';
      const slug = (item.fields.slug as string) || generateSlugFromTitle(title);
      return `/event/${slug}`;
    });
    
    // Return unique routes
    return [...new Set(eventSlugs)];
  } catch (error) {
    console.error('Error fetching event slugs:', error);
    return [];
  }
}

// Copy static data to output directory
async function copyStaticData(): Promise<void> {
  // Create static-data directory if it doesn't exist
  const staticDataDir = path.join(outDir, 'static-data');
  if (!fs.existsSync(staticDataDir)) {
    fs.mkdirSync(staticDataDir, { recursive: true });
  }
  
  try {
    // Use the generateStaticData function to fetch all content from Contentful
    // and save it to a temporary location
    console.log('Fetching content from Contentful...');
    await generateStaticData();
    
    // Copy the generated JSON file from public/static-data to the build output directory
    const sourceFile = path.join(root, 'public/static-data/contentful-data.json');
    const destFile = path.join(staticDataDir, 'contentful-data.json');
    
    // Verify the file exists and is readable
    if (!fs.existsSync(sourceFile)) {
      throw new Error(`Static data file not found at ${sourceFile}`);
    }
    
    // Read and validate the file content
    try {
      const fileContents = fs.readFileSync(sourceFile, 'utf-8');
      // Validate JSON by parsing and then re-stringifying
      const parsedData = JSON.parse(fileContents);
      const validatedJson = JSON.stringify(parsedData);
      
      // Write the validated JSON directly to the destination
      fs.writeFileSync(destFile, validatedJson);
      console.log('Static data validated and copied to output directory');
    } catch (jsonError) {
      console.error('Error validating JSON static data:', jsonError);
      // Create a minimal valid JSON data structure if the original is corrupt
      const minimalData = JSON.stringify({
        heroCarouselImages: [],
        districts: [],
        featuredEvents: [],
        events: [],
        statistics: [],
        rotaractStatisticsDistrict: [],
        rotaractStatisticsContributions: [],
        rotaractStatisticsCards: [],
        rotaractStatisticsCharts: [],
        leadershipChair: [],
        boardMembers: [],
        executiveCommittee: [],
        staffMembers: [],
        rotaryFoundationData: {
          introduction: {
            title: "",
            content: ""
          },
          funds: [],
          donationLink: ""
        }
      }, null, 2);
      
      fs.writeFileSync(destFile, minimalData);
      console.warn('Created minimal fallback static data due to validation failure');
    }
  } catch (error) {
    console.error('Error copying static data:', error);
    
    // Create a minimal valid JSON data structure as fallback
    const minimalData = JSON.stringify({
      heroCarouselImages: [],
      districts: [],
      featuredEvents: [],
      events: [],
      statistics: [],
      rotaractStatisticsDistrict: [],
      rotaractStatisticsContributions: [],
      rotaractStatisticsCards: [],
      rotaractStatisticsCharts: [],
      leadershipChair: [],
      boardMembers: [],
      executiveCommittee: [],
      staffMembers: [],
      rotaryFoundationData: {
        introduction: {
          title: "",
          content: ""
        },
        funds: [],
        donationLink: ""
      }
    }, null, 2);
    
    const destFile = path.join(staticDataDir, 'contentful-data.json');
    fs.writeFileSync(destFile, minimalData);
    console.warn('Created fallback static data file due to error');
  }
}

// Copy sitemap.xml and robots.txt to the dist directory
async function copyImportantFiles(): Promise<void> {
  try {
    // Create the dist directory if it doesn't exist
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    // Copy robots.txt if it exists
    const robotsSource = path.join(root, 'public', 'robots.txt');
    const robotsDestination = path.join(outDir, 'robots.txt');
    
    if (fs.existsSync(robotsSource)) {
      fs.copyFileSync(robotsSource, robotsDestination);
      console.log('robots.txt copied to dist directory');
    } else {
      console.warn('robots.txt not found in public directory, skipping copy');
    }
  } catch (error) {
    console.error('Error copying important files:', error);
  }
}

interface RenderModule {
  render: (route: string) => string;
}

// Main build function
async function buildSSG(): Promise<void> {
  console.log('Starting SSG build...');
  
  // Import utilities
  await importUtils();
  
  // Clear the output directory if it exists
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  
  // Generate sitemap before building
  console.log('Generating sitemap...');
  try {
    await generateSitemap();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    console.warn('Continuing build without sitemap generation');
  }
  
  // 1. Build the client app
  console.log('Building client app...');
  await build({
    root,
    mode: 'production',
    build: {
      outDir,
      ssrManifest: true,
    },
    define: {
      'process.env.SSG': JSON.stringify(true),
    },
  });
  
  // 2. Build the server renderer
  console.log('Building server renderer...');
  await build({
    root,
    mode: 'production',
    build: {
      outDir: path.join(outDir, 'server'),
      ssr: 'src/entry-server.tsx',
    },
    define: {
      'process.env.SSG': JSON.stringify(true),
    },
    // Force bundle all node_modules for SSR
    ssr: {
      noExternal: true,
    },
  });
  
  // 3. Copy static data
  await copyStaticData();
  
  // 4. Get dynamic routes
  console.log('Fetching dynamic routes...');
  const districtRoutes = await fetchDistrictIds();
  const eventRoutes = await fetchEventSlugs();
  const allRoutes = [...staticRoutes, ...districtRoutes, ...eventRoutes];
  
  // 5. Pre-render each route
  console.log('Pre-rendering routes...');
  
  try {
    const serverEntryPath = path.join(outDir, 'server', 'entry-server.js');
    const renderModule = await import(`file://${serverEntryPath}`) as RenderModule;
    const { render } = renderModule;
    
    // Create a temporary Vite server for rendering
    const viteServer = await createServer({
      root,
      server: { middlewareMode: true },
    });
    
    const templatePath = path.join(outDir, 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Process each route
    for (const route of allRoutes) {
      console.log(`Pre-rendering route: ${route}`);
      
      try {
        // Render the route to HTML
        const appHtml = render(route);
        
        // Replace the app placeholder with the rendered HTML
        const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        
        // Determine output path
        let outputPath: string;
        if (route === '/') {
          outputPath = path.join(outDir, 'index.html');
        } else {
          outputPath = path.join(outDir, route.slice(1), 'index.html');
          fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        }
        
        // Write the HTML file
        fs.writeFileSync(outputPath, html);
      } catch (error) {
        console.error(`Error pre-rendering route ${route}:`, error);
      }
    }
    
    await viteServer.close();
  } catch (error) {
    console.error('Error during pre-rendering:', error);
  }
  
  // After all pre-rendering is done
  console.log('Copying important files...');
  await copyImportantFiles();
  
  console.log('SSG build completed!');
}

buildSSG().catch(err => {
  console.error('SSG build failed:', err);
  process.exit(1);
}); 