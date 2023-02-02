import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { UserContexProvider } from './contex/UserContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <UserContexProvider>
        <App />
      </UserContexProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
