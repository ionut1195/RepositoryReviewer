import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import token from '../app.config.js'
import { ApolloLink } from '@apollo/client'

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const commentsLink = createHttpLink({
	uri: 'http://localhost:5000/graphql'
})

const client = new ApolloClient({
  link: ApolloLink.split(
	operation => operation.getContext().clientName === 'comments-client',
	commentsLink,
	authLink.concat(link)
  ),
  cache: new InMemoryCache()
})

export default client