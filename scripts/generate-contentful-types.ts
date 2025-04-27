#!/usr/bin/env ts-node
/**
 * Script to generate TypeScript types from Contentful content models
 * 
 * This script uses cf-content-types-generator to generate TypeScript interfaces
 * for all content types defined in the Contentful space.
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { log } from 'console';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config();

// Ensure required environment variables are set
const requiredEnvVars = [
  'VITE_CONTENTFUL_SPACE_ID',
  'VITE_CONTENTFUL_CMA_TOKEN'
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Error: Missing required environment variables:');
  missingEnvVars.forEach(varName => {
    console.error(`  - ${varName}`);
  });
  console.error('\nPlease provide these variables in your environment or .env file.');
  process.exit(1);
}

// Path to the output directory for the generated types
const outputDir = path.resolve(__dirname, '..', 'src', 'types');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

// Get environment variables
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID!;
const accessToken = process.env.VITE_CONTENTFUL_CMA_TOKEN!;
const environment = process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master';

// Run the generator
try {
  console.log('Generating TypeScript types from Contentful content models...');
  console.log(spaceId, accessToken, environment, outputDir);
  
  // The command with direct parameters - removing the -l flag as it conflicts with -X
  const command = `npx cf-content-types-generator -s ${spaceId} -t ${accessToken} -e ${environment} -o ${outputDir} -d -p -X`;
  
  execSync(command, { 
    stdio: 'inherit',
    env: process.env 
  });
  
  console.log('\nSuccessfully generated TypeScript types!');
  console.log(`Types are available in: ${outputDir}`);
  
} catch (error) {
  console.error('Error generating TypeScript types:', error);
  process.exit(1);
} 