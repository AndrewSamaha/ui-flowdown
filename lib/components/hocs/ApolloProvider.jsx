import { createContext, useContext, createSignal } from 'solid-js'

const ApolloContext = createContext();

export const ApolloProvider = props => (
  <ApolloContext.Provider value={props.client}>{props.children}</ApolloContext.Provider>
)

export const useApollo = () => {
  const apolloClient = useContext(ApolloContext)
  if (!apolloClient) {
    throw new Error(
      'apolloClient could not be found in context. Did you wrap your Component with <ApolloProvider client={...} /> ?'
    )
  }
  return apolloClient
}
