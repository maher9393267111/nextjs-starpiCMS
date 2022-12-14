import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
     <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
