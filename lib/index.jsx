/* @refresh reload */
import { render } from 'solid-js/web'
import { Suspense } from 'solid-js'
import { ApolloClient, InMemoryCache, gql, makeVar } from '@apollo/client/core';

import { ApolloProvider } from './components/hocs/ApolloProvider';


import '../css/index.css'
import App from './App'

const cache = new InMemoryCache();

const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    uri: 'http://localhost:4000/',
  
    // Provide some optional constructor fields
    name: 'ui-flowdown',
    version: '0.0.1',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

const root = document.getElementById('root')
render(() => 
    <ApolloProvider client={client} >
        <Suspense  fallback={<>App is loading…</>}>
            <App />
        </Suspense>
    </ApolloProvider>
, root)

