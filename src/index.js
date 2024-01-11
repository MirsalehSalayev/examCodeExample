import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BasketProvider } from './components/context/BasketContext';
import { WishProvider } from './components/context/WishContext';
import { SearchProvider } from './components/context/SearchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <BasketProvider>
        <WishProvider>
          <App />
        </WishProvider>
      </BasketProvider>
    </SearchProvider>
  </React.StrictMode>
);


