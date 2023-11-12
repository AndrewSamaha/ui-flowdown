import Sortable from 'sortablejs';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { sections } from './lib/sections';
import { songs } from './lib/songs';
import { asanas } from './lib/asanas';
import { AsanaCard, SongCard, SectionCard } from './lib/components/cards';
import { verticalScale } from './lib/constants/scale';

Sortable.create(document.getElementById('sortable-asanas'));
Sortable.create(document.getElementById('sortable-songs'));

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
    showFlow(getAllFlows[0])
}
const showFlow = (flow) => {
    console.log(flow)
    const { name, asanas, sections, songs } = flow;
    document.querySelector('#flow-name').innerHTML = name;
    document.querySelector('#sortable-sections').innerHTML = sections.map(SectionCard).join(' ');
    document.querySelector('#sortable-songs').innerHTML = songs.map(SongCard).join(' ');
    document.querySelector('#sortable-asanas').innerHTML = asanas.map(AsanaCard).join(' ');
}

client
  .query({
    query: gql`
      query GetAllFlows {
        getAllFlows {
            asanas {
              duration
              id
              name
              cue
            }
            name
            sections {
              duration
              id
              name
            }
            id
            songs {
              artist
              duration
              id
              name
            }
          }
      }
    `,
  })
  .then(processGetAllFlows);

