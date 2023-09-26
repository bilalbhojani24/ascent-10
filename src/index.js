import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // default import
import App2 from './App2'; // default import
import JSXComponent from './JSXComponent';
import Card from './Card';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // target container

// Render the content(component, html) inside target container
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <JSXComponent /> */}
    <div className="flex">
      <Card
        heading="Iphone 12"
        description="Iphone 12 is goot mobile"
        price="$60"
      />
      <Card
        heading="Iphone 13"
        description="Iphone 12 is goot mobile"
        price="$60"
      />
      <Card
        heading="Iphone 14"
        description="Iphone 12 is goot mobile"
        price="$60"
      />
      <Card
        heading="Iphone 15"
        description="Iphone 12 is goot mobile"
        price="$60"
      />
    </div>
  </React.StrictMode>
);
