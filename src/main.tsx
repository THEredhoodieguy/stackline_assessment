import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App'; // Import the main App component
import './index.css'; // Optional: Global styles (if you have any)

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);