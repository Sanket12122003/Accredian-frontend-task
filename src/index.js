// Import  dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
