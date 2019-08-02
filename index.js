import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    // uri: 'https://api.hashnode.com/graphql',
    uri: 'http://localhost:4000/graphql',
    headers: {
      'client-name': 'Hashnode Browser Extension',
      'client-version': '0.0.1',
    },
  }),

});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
