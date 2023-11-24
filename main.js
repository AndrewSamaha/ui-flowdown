import Sortable from 'sortablejs';
import flattenDeep from 'lodash/flattenDeep';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { sections } from './lib/sections';
import { songs } from './lib/songs';
import { asanas } from './lib/asanas';
import { AsanaCard, SongCard, SectionCard } from './lib/components/cards';
import { verticalScale } from './lib/constants/scale';
import { ToolPanel } from './lib/components/ToolPanel';
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

// const renderPage = (component, data) => {
//   document.querySelector('#app').innerHTML = `
//     ${component(data)}
//   `;
//   Sortable.create(document.getElementById('sortable-asanas'));
// Sortable.create(document.getElementById('sortable-songs'));
// }

const processGetAllFlows = (result) => {
    const { data: { getAllFlows } } = result;
    console.log(getAllFlows)
    if (getAllFlows.length <= 0) throw('received empty array from server')
    //showFlow(getAllFlows[1])
    //renderPage(Flow, { flow: getAllFlows[1] })
    Flow({ flow: getAllFlows[1] }, { renderSelf: true});
}
// const showFlow = (flow) => {
//     console.log(flow)
//     const { name, asanas, sections, songs } = flow;
//     document.querySelector('#flow-name').innerHTML = name;
//     document.querySelector('#sortable-sections').innerHTML = sections.map(SectionCard).join(' ');
//     document.querySelector('#sortable-songs').innerHTML = songs.map(SongCard).join(' ');
//     document.querySelector('#sortable-asanas').innerHTML = asanas.map(AsanaCard).join(' ');
// }

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

