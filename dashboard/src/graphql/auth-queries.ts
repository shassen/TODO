import { gql } from "@apollo/client"

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
