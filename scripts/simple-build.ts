// Simplified Build Script
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from 'contentful';
import { generateStaticData } from './generate-static-data.ts';
import generateSitemap from './generate-sitemap.ts';

// Load environment variables
dotenv.config();

const root = process.cwd();
const outDir = path.join(root, 'dist');

// Simple slug generator
const generateSlugFromTitle = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
};

// Get all routes that need to be pre-rendered
async function getAllRoutes(): Promise<string[]> {
  // Static routes from JSON
  const routesFilePath = path.join(root, 'src', 'data', 'ssg-routes.json');
  const staticRoutes: string[] = JSON.parse(fs.readFileSync(routesFilePath, 'utf-8')).routes;
  
  // Get dynamic routes from Contentful
  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT as string || 'master',
  });

  try {
    // Fetch districts
    const districts = await client.getEntries({ content_type: 'district' });
    const districtRoutes = districts.items.map(item => `/district/${item.fields.id as string}`);
    
    // Fetch events
    const [featuredEvents, events] = await Promise.all([
      client.getEntries({ content_type: 'featuredEvent' }),
      client.getEntries({ content_type: 'event' })
    ]);
    
    const allEvents = [...featuredEvents.items, ...events.items];
    const eventRoutes = allEvents.map(item => {
      const title = (item.fields.title as string) || 'Event';
      const slug = (item.fields.slug as string) || generateSlugFromTitle(title);
      return `/event/${slug}`;
    });
    
    // Remove duplicates and return
    return [...new Set([...staticRoutes, ...districtRoutes, ...eventRoutes])];
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return staticRoutes; // Fallback to static routes only
  }
}

// Copy important files to dist
function copyStaticFiles(): void {
  const filesToCopy = [
    { from: 'public/robots.txt', to: 'robots.txt' },
    { from: 'public/sitemap.xml', to: 'sitemap.xml' },
    { from: 'public/static-data/contentful-data.json', to: 'static-data/contentful-data.json' }
  ];

  for (const file of filesToCopy) {
    const sourcePath = path.join(root, file.from);
    const destPath = path.join(outDir, file.to);
    
    if (fs.existsSync(sourcePath)) {
      // Ensure directory exists
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied ${file.from} to dist/${file.to}`);
    } else {
      console.warn(`⚠ File not found: ${file.from}`);
    }
  }
}

// Main build function
export async function simpleBuild(): Promise<void> {
  const isPostBuild = fs.existsSync(outDir);
  
  if (isPostBuild) {
    console.log('📦 Running post-build tasks...');
    
    // Only copy files after Vite build
    console.log('📁 Copying static files to dist...');
    copyStaticFiles();
    
    console.log('✅ Post-build completed!');
    return;
  }
  
  console.log('🚀 Starting pre-build data generation...');
  
  try {
    // Step 1: Generate static data from Contentful
    console.log('📥 Generating static data...');
    await generateStaticData();
    
    // Step 2: Generate sitemap
    console.log('🗺️ Generating sitemap...');
    await generateSitemap();
    
    // Step 3: Get all routes for future reference
    console.log('📋 Collecting routes...');
    const allRoutes = await getAllRoutes();
    
    // Write routes file for potential future use
    const routesOutputPath = path.join(root, 'src', 'generated-routes.json');
    fs.writeFileSync(routesOutputPath, JSON.stringify({ routes: allRoutes }, null, 2));
    console.log(`✓ Generated ${allRoutes.length} routes`);
    
    console.log('✅ Pre-build completed!');
    console.log('💡 Ready for Vite build');
    
  } catch (error) {
    console.error('❌ Pre-build failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1]?.endsWith('simple-build.ts')) {
  simpleBuild();
} 