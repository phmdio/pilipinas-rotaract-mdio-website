import posthog from 'posthog-js'

const isBrowser = typeof window !== 'undefined'

// Initialize PostHog only in browser environment
export const initPostHog = () => {
  if (isBrowser) {
    // Replace with your actual PostHog API key
    const apiKey = import.meta.env.VITE_POSTHOG_API_KEY || 'your_placeholder_key'
    const apiHost = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com'
    
    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: true, // Enable automatic page view tracking
      persistence: 'localStorage',
      autocapture: true,
      loaded: (posthog) => {
        if (import.meta.env.MODE === 'development') {
          // Disable PostHog in development by default
          posthog.opt_out_capturing()
        }
      },
    })
  }
}

// Helper to safely call PostHog methods in any environment
export const captureEvent = (eventName: string, properties?: Record<string, any>) => {
  if (isBrowser && posthog.isFeatureEnabled?.('analytics')) {
    posthog.capture(eventName, properties)
  }
}

export const capturePageview = (currentPath: string) => {
  if (isBrowser && posthog.isFeatureEnabled?.('analytics')) {
    posthog.capture('$pageview', { path: currentPath })
  }
}

// Export PostHog instance for direct use where needed
export { posthog } 