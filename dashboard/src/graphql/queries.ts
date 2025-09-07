import { gql } from "@apollo/client"

export const FETCH_MANY_TODOS = gql`
  query FetchManyTodos {
    fetchManyTodos {
      id
      title
      content
      completed
      collectionId
    }
  }
`
