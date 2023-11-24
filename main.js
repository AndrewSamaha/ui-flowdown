import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { Flow } from './lib/components/Pages/Flow';

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


const processGetAllFlows = (result) => {
    const { data: { getAllFlows } } = result;
    console.log(getAllFlows)
    if (getAllFlows.length <= 0) throw('received empty array from server')
    Flow({ flow: getAllFlows[1] }, { renderSelf: true});
}

client
  .query({
    query: gql`
      query GetAllFlows {
        getAllFlows {
            asanas {
              duration {
                float
                string
              }
              id
              name
              cue
            }
            name
            sections {
              duration {
                float
                string
              }
              id
              name
            }
            id
            songs {
              artist
              duration {
                float
                string
              }
              id
              name
            }
          }
      }
    `,
  })
  .then(processGetAllFlows);

