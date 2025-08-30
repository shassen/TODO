"use client"
import { createContext, useContext } from "react"
// import { gql } from "@apollo/client"
import { AuthContextType } from "@/lib/types"

// const LOGIN_USER = gql`
//   mutation LoginUser($data: LoginUserInput!) {
//     loginUser(data: $data) {
//       token
//       user {
//         id
//         email
//         name
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `

// const REGISTER_USER = gql`
//   mutation RegisterUser($data: RegisterUserInput!) {
//     registerUser(data: $data) {
//       id
//       email
//       name
//       createdAt
//       updatedAt
//     }
//   }
// `

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export { AuthContext }
