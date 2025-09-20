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

export const UPDATE_TODO = gql`
  mutation UpdateTodo($data: UpdateTodoInput!) {
    updateTodo(data: $data) {
      id
    }
  }
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

export const COMPLETE_TODO = gql`
  mutation CompleteTodo($data: CompleteTodoInput!) {
    completeTodo(data: $data) {
      id
    }
  }
`

export const ARCHIVE_TODO = gql`
  mutation ArchiveTodo($id: String!) {
    archiveTodo(id: $id) {
      id
    }
  }
`
