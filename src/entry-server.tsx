import React from 'react'
import { ViteApp } from './main'
import { StaticRouter } from 'react-router-dom/server'
// Import HelmetProvider directly from react-helmet-async
import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'

// Create a helmet context for SSR
const helmetContext = {}

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <ViteApp />
      </HelmetProvider>
    </StaticRouter>
  )
} 