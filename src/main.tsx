import React from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable refetching on window focus for SSG
      refetchOnWindowFocus: false,
      // Cache the data for 24 hours
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
})

// Export the app component to be used by vite-react-ssg
// No router included - the appropriate router will be provided by entry-client.tsx or entry-server.tsx
export const ViteApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

// Only use BrowserRouter in client-side rendering (entry-client.tsx will use this)
export const ClientApp = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)

// Default export for development mode (client-side only)
export default ClientApp
