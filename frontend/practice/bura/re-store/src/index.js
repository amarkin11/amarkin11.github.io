import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import { BookstoreProvider } from './components/BookstoreContext';
import BookstoreService from './services/Bookstore';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';

const root = ReactDOM.createRoot(document.getElementById('root'));
const bookstoreService = new BookstoreService();

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorBoundry>
        <BookstoreProvider value={ bookstoreService }>
          <App />
        </BookstoreProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
