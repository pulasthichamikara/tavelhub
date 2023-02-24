import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { UserContexProvider } from './contex/UserContext';
import { SearchContextProvider } from './contex/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <UserContexProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </UserContexProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
