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

export const CREATE_TODO = gql`
  mutation CreateTodo($data: CreateTodoInput!) {
    createTodo(data: $data) {
      id
      title
      completed
      dueDate
      createdAt
      updatedAt
      creatorId
      collectionId
    }
  }
`

export const LOGIN_USER = gql`
  mutation LoginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      token
      user {
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`

export const REGISTER_USER = gql`
  mutation RegisterUser($data: RegisterUserInput!) {
    registerUser(data: $data) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`
