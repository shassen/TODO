"use client"

import { ApolloProvider } from "@apollo/client/react"
import { client } from "@/lib/apollo-client"
import { AuthProvider } from "./AuthProvider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  )
}
