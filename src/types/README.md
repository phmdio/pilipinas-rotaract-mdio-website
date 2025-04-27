# Contentful Generated Types

This directory contains TypeScript types automatically generated from your Contentful content models using the [cf-content-types-generator](https://github.com/contentful-userland/cf-content-types-generator) package.

## How to Use

The generated types represent your Contentful content models and can be imported and used in your TypeScript code:

```typescript
import { IHeroCarouselImageFields } from './types/contentful';

// Use the types in your code
const heroImage: IHeroCarouselImageFields = {
  title: 'My Hero Image',
  image: { ... },
  alt: 'Description of image'
};
```

## Regenerating Types

When you make changes to your Contentful content models, you'll need to regenerate these types to keep them in sync.

Run the following command:

```bash
npm run generate-contentful-types
```

This script will connect to your Contentful space and generate updated TypeScript interfaces for all content types.

## Required Environment Variables

To run the generator, you need to set up the following environment variables:

- `VITE_CONTENTFUL_SPACE_ID` - Your Contentful space ID
- `VITE_CONTENTFUL_ACCESS_TOKEN` - Your Contentful content delivery API access token
- `VITE_CONTENTFUL_ENVIRONMENT` - Your Contentful environment (defaults to 'master')

These can be provided in a `.env` file at the root of the project or set in your environment.

### How to Obtain Contentful Credentials

1. **Login to Contentful**: Go to [Contentful](https://app.contentful.com/) and log in to your account.

2. **Navigate to your Space**: Select the space you want to generate types for.

3. **Get the Space ID**:
   - Go to Settings > General Settings
   - Copy the Space ID shown at the top

4. **Create an API Key**:
   - Go to Settings > API Keys
   - Create a new API key or use an existing one
   - The "Content Delivery API - access token" is what you need for `VITE_CONTENTFUL_ACCESS_TOKEN`

5. **Environment**:
   - By default, Contentful uses 'master' as the environment name
   - If you're using a different environment, specify its name for `VITE_CONTENTFUL_ENVIRONMENT`

## Manual Modifications

Do not modify the generated type files directly. Any changes will be overwritten when the types are regenerated. If you need to extend or customize the types, create separate files that import and extend the generated types. 