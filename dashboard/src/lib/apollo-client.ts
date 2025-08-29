import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { SetContextLink } from "@apollo/client/link/context"
import { headers } from "next/headers"

const httpLink = new HttpLink({ uri: "http://localhost:3000/graphql" })

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }

  return null
}

const authLink = new SetContextLink((prevContext, nextContext) => {
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
