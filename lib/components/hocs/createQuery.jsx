import { createResource, onCleanup } from 'solid-js'
import { createStore, reconcile } from 'solid-js/store'

import { useApollo } from './ApolloProvider'

export const createQuery = (
  query,
  options = {}
) => {
  const apolloClient = useApollo()

  const optionsAccessor = () => {
    if (typeof options !== 'function') {
      if (options.skip) {
        console.warn(
          'you passed options.skip to createQuery, but the options are not an acccessor.\nThis query will never execute!\n\nReplace your options with a function.'
        )
      }

      return options
    }
    const opts = typeof options === 'function' ? options() : options
    if (opts.skip) {
      return false
    }
    return opts
  }

  const [resource] = createResource(optionsAccessor, opts => {
    const observable = apolloClient.watchQuery({ query, ...opts })
    const [state, setState] = createStore({})

    let resolved = false
    return new Promise((resolve, reject) => {
        const sub = observable.subscribe({
            error: reject,
            next: ({ data, error }) => {
            if (error) {
                reject(error)
            }

            if (!resolved) {
                resolved = true
                setState(data)
                resolve(state)
            } else {
                setState(reconcile(data))
            }
            },
        })

        onCleanup(() => sub.unsubscribe())
    })
  })
  return resource
}
