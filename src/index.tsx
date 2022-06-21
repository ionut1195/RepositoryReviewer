import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.component';
import {ApolloProvider} from '@apollo/client'
import client from './common/apollo-client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
