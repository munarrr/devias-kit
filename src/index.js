import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}>
 
    <BrowserRouter>
      <App />
      </BrowserRouter >
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

