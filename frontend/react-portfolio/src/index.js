import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';

import './static/scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  // </React.StrictMode>
);
