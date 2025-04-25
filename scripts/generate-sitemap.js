import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Base URL for the site
const BASE_URL = 'https://www.pilipinasrotaract.org';

// Contentful client
const contentfulClient = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

// Static routes with their change frequencies and priorities
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/information-center', changefreq: 'weekly', priority: '0.8' },
  { path: '/our-history', changefreq: 'monthly', priority: '0.6' },
  { path: '/our-leadership-team', changefreq: 'monthly', priority: '0.7' },
  { path: '/rotaract-statistics', changefreq: 'monthly', priority: '0.6' },
  { path: '/philippine-rotaract-magazine', changefreq: 'monthly', priority: '0.6' },
  { path: '/ang-balangay', changefreq: 'monthly', priority: '0.6' },
  { path: '/the-rotary-foundation-giving', changefreq: 'monthly', priority: '0.6' },
  { path: '/our-programs-and-activities', changefreq: 'weekly', priority: '0.8' },
  { path: '/our-chair', changefreq: 'monthly', priority: '0.6' },
  { path: '/launching-soon', changefreq: 'monthly', priority: '0.3' },
  { path: '/under-construction', changefreq: 'monthly', priority: '0.3' },
];

// Fetch districts from Contentful
async function getDistricts() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'district',
    });
    
    return entries.items.map(item => ({
      id: item.fields.id
    }));
  } catch (error) {
    console.error('Error fetching districts:', error);
    return [];
  }
}

// Fetch events from Contentful
async function getEvents() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'event',
    });
    
    return entries.items.map(item => ({
      slug: item.fields.slug || generateSlugFromTitle(item.fields.title || 'Event')
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Simple slug generator as a fallback
function generateSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate the sitemap XML content
 */
async function generateSitemap() {
  try {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static routes
    for (const route of staticRoutes) {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${BASE_URL}${route.path}</loc>\n`;
      sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${route.priority}</priority>\n`;
      sitemap += '  </url>\n';
    }

    // Fetch and add dynamic districts
    try {
      const districts = await getDistricts();
      
      if (districts && districts.length > 0) {
        for (const district of districts) {
          sitemap += '  <url>\n';
          sitemap += `    <loc>${BASE_URL}/district/${district.id}</loc>\n`;
          sitemap += '    <changefreq>monthly</changefreq>\n';
          sitemap += '    <priority>0.6</priority>\n';
          sitemap += '  </url>\n';
        }
      } else {
        console.warn('No districts found. Using placeholder district data in sitemap.');
        // Use placeholder district IDs if no data is available
        const placeholderDistricts = ['3780', '3790', '3810'];
        for (const districtId of placeholderDistricts) {
          sitemap += '  <url>\n';
          sitemap += `    <loc>${BASE_URL}/district/${districtId}</loc>\n`;
          sitemap += '    <changefreq>monthly</changefreq>\n';
          sitemap += '    <priority>0.6</priority>\n';
          sitemap += '  </url>\n';
        }
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
      console.warn('Using placeholder district data in sitemap.');
      // Use placeholder district IDs if data fetch fails
      const placeholderDistricts = ['3780', '3790', '3810'];
      for (const districtId of placeholderDistricts) {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${BASE_URL}/district/${districtId}</loc>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.6</priority>\n';
        sitemap += '  </url>\n';
      }
    }

    // Fetch and add dynamic events
    try {
      const events = await getEvents();
      
      if (events && events.length > 0) {
        for (const event of events) {
          if (event.slug) {
            sitemap += '  <url>\n';
            sitemap += `    <loc>${BASE_URL}/event/${event.slug}</loc>\n`;
            sitemap += '    <changefreq>monthly</changefreq>\n';
            sitemap += `    <priority>0.7</priority>\n`;
            sitemap += '  </url>\n';
          }
        }
      } else {
        console.warn('No events found. Using placeholder event data in sitemap.');
        // Use placeholder event slugs if no data is available
        const placeholderEvents = ['rotaract-assembly-2023', 'mdio-conference-2023'];
        for (const eventSlug of placeholderEvents) {
          sitemap += '  <url>\n';
          sitemap += `    <loc>${BASE_URL}/event/${eventSlug}</loc>\n`;
          sitemap += '    <changefreq>monthly</changefreq>\n';
          sitemap += '    <priority>0.7</priority>\n';
          sitemap += '  </url>\n';
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      console.warn('Using placeholder event data in sitemap.');
      // Use placeholder event slugs if data fetch fails
      const placeholderEvents = ['rotaract-assembly-2023', 'mdio-conference-2023'];
      for (const eventSlug of placeholderEvents) {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${BASE_URL}/event/${eventSlug}</loc>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.7</priority>\n';
        sitemap += '  </url>\n';
      }
    }

    // Close sitemap
    sitemap += '</urlset>';

    // Write sitemap to file
    const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    
    console.log(`Sitemap generated at ${outputPath}`);
    
    // Make sure to copy the sitemap to the dist directory as well for SSG
    const distOutputPath = path.resolve(process.cwd(), 'dist', 'sitemap.xml');
    if (fs.existsSync(path.dirname(distOutputPath))) {
      fs.writeFileSync(distOutputPath, sitemap);
      console.log(`Sitemap also copied to ${distOutputPath}`);
    }
    
    return { success: true, message: 'Sitemap generated successfully' };
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    return { success: false, message: `Failed to generate sitemap: ${error}` };
  }
}

// Run the generator if called directly
if (import.meta.url === new URL(import.meta.url).href) {
  generateSitemap()
    .then((result) => {
      if (result.success) {
        console.log(result.message);
        process.exit(0);
      } else {
        console.error(result.message);
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error('Unexpected error:', error);
      process.exit(1);
    });
}

export default generateSitemap; 