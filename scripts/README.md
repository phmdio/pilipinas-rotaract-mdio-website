# Scripts Directory

This directory contains utility scripts for the Pilipinas Rotaract MDIO website.

## Available Scripts

### generate-static-data.js

This script generates static data for the website during the build process.

### generate-sitemap.ts

This script generates a sitemap.xml file for the website based on both static routes and dynamic content from Contentful.

Usage:
```bash
# Generate sitemap directly
npm run generate-sitemap

# Sitemap is automatically generated during build
npm run build
```

The sitemap is generated in the `public` directory as `sitemap.xml`.

### generate-sitemap.js

JavaScript version of the sitemap generator used by the SSG build process. This script has the same functionality as generate-sitemap.ts but is written in JavaScript for direct import in the SSG build script.

The sitemap is generated in both the `public` and `dist` directories.

### ssg-build.js

This script handles the Static Site Generation (SSG) build process. It now includes:

1. Generating the sitemap before building
2. Building the client app
3. Building the server renderer
4. Copying static data
5. Pre-rendering all routes
6. Copying important files like robots.txt to the dist directory

## How to Run

All scripts are integrated into the npm commands and can be run through them:

```bash
# Run the development server
npm run dev

# Build the site (includes sitemap generation)
npm run build

# Build for development
npm run build:dev

# Build with SSG (now includes sitemap generation)
npm run build:ssg

# Generate sitemap only
npm run generate-sitemap
``` 