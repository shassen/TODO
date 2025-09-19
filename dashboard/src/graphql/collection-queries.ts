import { gql } from "@apollo/client"

export const FETCH_MANY_COLLECTIONS = gql`
  query FetchManyCollections {
    fetchManyCollections {
      id
      name
      description
      updatedAt
      todos {
        id
        title
        completed
      }
      collaborators {
        id
        permission
        userId
      }
    }
  }
`

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($data: CreateCollectionInput!) {
    createCollection(data: $data) {
      id
      name
      description
    }
  }
`

export const DELETE_COLLECTION = gql`
  mutation DeleteCollection($data: DeleteCollectionInput!) {
    deleteCollection(data: $data) {
      id
    }
  }
`

// TODO: Add update collection functionality soon
// export const UPDATE_COLLECTION = gql`
//   mutation UpdateCollection($data: UpdateCollectionInput!) {
//     updateCollection(data: $data) {
//       id
//       name
//       description
//     }
//   }
// `
