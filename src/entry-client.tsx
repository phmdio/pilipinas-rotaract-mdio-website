import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { ClientApp } from './main'
import './index.css'

// Hydrate if the app was pre-rendered, otherwise render normally
const container = document.getElementById('root')

if (container?.hasChildNodes()) {
  hydrateRoot(container, <ClientApp />)
} else {
  if (container) {
    createRoot(container).render(<ClientApp />)
  }
} 