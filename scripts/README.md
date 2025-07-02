# Scripts Directory

This directory contains utility scripts for the Pilipinas Rotaract MDIO website.

## Available Scripts

### simple-build.ts (NEW - Simplified Build)

This is the new simplified build script that handles all pre-build data generation:

- Fetches data from Contentful and saves it as static JSON
- Generates sitemap.xml based on static and dynamic routes
- Collects all routes for static site generation
- Copies important files to the dist directory

Usage:
```bash
# Run the simplified build process
npm run build

# Or run just the data generation
npm run prebuild
```

### generate-static-data.ts

Fetches data from Contentful at build time and saves it as static JSON files.

### generate-sitemap.ts

Generates a sitemap.xml file for the website based on both static routes and dynamic content from Contentful.

### generate-contentful-types.ts

Generates TypeScript types from Contentful content models.

## Simplified Build Process

The new build process is much simpler:

1. **Prebuild Step** (`npm run prebuild`):
   - Generates static data from Contentful
   - Creates sitemap.xml
   - Collects all routes for SSG

2. **Build Step** (`npm run build`):
   - Runs Vite build (standard React SPA build)
   - Copies static files to dist directory

3. **Result**: A static site with all content pre-fetched and ready for deployment

## Key Improvements

- ✅ **Simplified**: Reduced from 362 lines of complex SSR logic to ~100 lines
- ✅ **Reliable**: Uses standard Vite build process
- ✅ **Fast**: No complex server-side rendering during build
- ✅ **Maintainable**: Easy to understand and modify
- ✅ **Static**: All content is pre-fetched and cached as JSON

## Migration from Old SSG Build

The old `ssg-build.ts` script has been removed. The new process:

- Uses standard Vite build instead of custom SSR
- Pre-fetches all data during prebuild step
- Relies on client-side routing with static data
- Much simpler deployment and debugging

## How to Run

All scripts are integrated into the npm commands:

```bash
# Run the development server
npm run dev

# Build the site (simplified process)
npm run build

# Build for development
npm run build:dev

# Generate sitemap only
npm run generate-sitemap

# Generate static data only
npm run generate-static-data

# Generate Contentful types
npm run generate-contentful-types
``` 