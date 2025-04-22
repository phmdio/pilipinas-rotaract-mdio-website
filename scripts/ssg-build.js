// SSG Build Script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import { createServer } from 'vite';
import dotenv from 'dotenv';
import { createClient } from 'contentful';

// Load environment variables
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'dist');

// Load predefined routes from JSON file
const routesFilePath = path.join(root, 'src', 'data', 'ssg-routes.json');
const staticRoutes = JSON.parse(fs.readFileSync(routesFilePath, 'utf-8')).routes;

// Fetch district IDs from Contentful to generate district detail routes
async function fetchDistrictIds() {
  console.log('Fetching district IDs from Contentful...');
  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
  });

  try {
    const entries = await client.getEntries({
      content_type: 'district',
    });
    
    return entries.items.map(item => `/district/${item.sys.id}`);
  } catch (error) {
    console.error('Error fetching district IDs:', error);
    return [];
  }
}

// Copy static data to output directory
async function copyStaticData() {
  // Create static-data directory if it doesn't exist
  const staticDataDir = path.join(outDir, 'static-data');
  if (!fs.existsSync(staticDataDir)) {
    fs.mkdirSync(staticDataDir, { recursive: true });
  }
  
  // Generate static data
  const contentfulClient = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
  });
  
  // Fetch hero carousel images
  const entries = await contentfulClient.getEntries({
    content_type: 'heroCarouselImage',
    order: ['sys.createdAt'],
  });
  
  const heroCarouselImages = entries.items.map((item) => ({
    title: item.fields.title,
    imageUrl: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : '/assets/carousel.png', // Fallback image
    alt: item.fields.alt || item.fields.title || 'Rotaract carousel image',
  }));
  
  // Combine all data
  const staticData = {
    heroCarouselImages,
    // Add other data here
  };
  
  // Write to file
  fs.writeFileSync(
    path.join(staticDataDir, 'contentful-data.json'),
    JSON.stringify(staticData, null, 2)
  );
  
  console.log('Static data generated and copied to output directory');
}

// Main build function
async function buildSSG() {
  console.log('Starting SSG build...');
  
  // Clear the output directory if it exists
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
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
  });
  
  // 3. Copy static data
  await copyStaticData();
  
  // 4. Get dynamic routes
  console.log('Fetching dynamic routes...');
  const districtRoutes = await fetchDistrictIds();
  const allRoutes = [...staticRoutes, ...districtRoutes];
  
  // 5. Pre-render each route
  console.log('Pre-rendering routes...');
  const serverEntryPath = path.join(outDir, 'server', 'entry-server.js');
  const { render } = await import(`file://${serverEntryPath}`);
  
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
      let outputPath;
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
  
  console.log('SSG build completed!');
}

buildSSG().catch(err => {
  console.error('SSG build failed:', err);
  process.exit(1);
}); 