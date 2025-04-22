import React from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Export the app component to be used by vite-react-ssg
export const ViteApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// Default export for development mode
export default ViteApp
