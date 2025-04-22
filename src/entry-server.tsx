import React from 'react'
import { ViteApp } from './main'
import { StaticRouter } from 'react-router-dom/server'
// Import HelmetProvider directly from react-helmet-async
import { HelmetProvider } from 'react-helmet-async'

// Create a helmet context for SSR
const helmetContext = {}

export function render(url: string) {
  return (
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <ViteApp />
      </HelmetProvider>
    </StaticRouter>
  )
} 