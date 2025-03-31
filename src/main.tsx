
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for the DOM to be ready before rendering the app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderApp());
} else {
  renderApp();
}

function renderApp() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
}
