import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { ViteApp } from './main'
import './index.css'

// Hydrate if the app was pre-rendered, otherwise render normally
const container = document.getElementById('root')

if (container?.hasChildNodes()) {
  hydrateRoot(container, <ViteApp />)
} else {
  if (container) {
    createRoot(container).render(<ViteApp />)
  }
} 