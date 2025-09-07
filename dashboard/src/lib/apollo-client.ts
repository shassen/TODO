import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { SetContextLink } from "@apollo/client/link/context"
import { BatchHttpLink } from "@apollo/client/link/batch-http"

// decided to use batch http link because it is more efficient for batching requests
// TODO: consider using standard http link instead
const httpLink = new BatchHttpLink({
  uri: "http://localhost:3000/graphql",
  credentials: "same-origin",
})

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }

  return null
}

const authLink = new SetContextLink((prevContext) => {
  const token = getToken()

  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // ssrMode: typeof window === "undefined",
})
