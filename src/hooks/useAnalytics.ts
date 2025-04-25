import { useCallback } from 'react'
import { captureEvent } from '@/lib/posthog'

type EventProperties = Record<string, any>

const useAnalytics = () => {
  const trackEvent = useCallback((
    eventName: string, 
    properties?: EventProperties
  ) => {
    captureEvent(eventName, properties)
  }, [])

  // Predefined common events for consistency
  const events = {
    buttonClick: (buttonId: string, properties?: EventProperties) => 
      trackEvent('button_click', { button_id: buttonId, ...properties }),
    
    formSubmit: (formId: string, properties?: EventProperties) => 
      trackEvent('form_submit', { form_id: formId, ...properties }),
    
    linkClick: (linkUrl: string, linkText: string, properties?: EventProperties) => 
      trackEvent('link_click', { url: linkUrl, link_text: linkText, ...properties }),
    
    tabChange: (tabId: string, properties?: EventProperties) => 
      trackEvent('tab_change', { tab_id: tabId, ...properties }),
    
    modalOpen: (modalId: string, properties?: EventProperties) => 
      trackEvent('modal_open', { modal_id: modalId, ...properties }),
    
    modalClose: (modalId: string, properties?: EventProperties) => 
      trackEvent('modal_close', { modal_id: modalId, ...properties }),
    
    elementView: (elementId: string, properties?: EventProperties) => 
      trackEvent('element_view', { element_id: elementId, ...properties }),
  }

  return {
    trackEvent,
    events
  }
}

export default useAnalytics 