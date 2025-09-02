import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { SetContextLink } from "@apollo/client/link/context"

const httpLink = new HttpLink({ uri: "http://localhost:3000/graphql" })

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
})
