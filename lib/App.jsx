import { createSignal, createEffect } from 'solid-js'
import { ApolloClient, InMemoryCache, gql, makeVar } from '@apollo/client/core';
import { createQuery } from './components/hocs/createQuery';
import { FlowEditor } from './components/views/FlowEditor';

// import '../css/App.css'

const QUERY_GET_ALL_FLOWS = gql`
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
`
function App() {
  const queryResultGetter = createQuery(QUERY_GET_ALL_FLOWS)
  
  return (<>{queryResultGetter() ? <FlowEditor queryResult={queryResultGetter()}></FlowEditor> : <>loading...</>}</>)
}

export default App
