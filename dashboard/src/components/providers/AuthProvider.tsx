"use client"

import { useState, useEffect } from "react"
import { gql } from "@apollo/client"
import { useMutation } from "@apollo/client/react"
import { AuthContext } from "@/hooks/useAuth"
import {
  AuthContextType,
  LoginUserInput,
  LoginUserResponse,
  RegisterUserInput,
  User,
} from "@/lib/types"
import {
  isTokenValid,
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
  removeTokenFromStorage,
} from "@/lib/auth"

const LOGIN_USER = gql`
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

const REGISTER_USER = gql`
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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [loginMutation] = useMutation(LOGIN_USER)
  const [registerMutation] = useMutation(REGISTER_USER)

  useEffect(() => {
    const existingToken = getTokenFromLocalStorage()
    if (existingToken && isTokenValid({ token: existingToken })) {
      console.log("in useEffect")
      setToken(existingToken)
      setUser(null)
    }
    setIsLoading(false)
  }, [])

  const login = async ({ email, password }: LoginUserInput) => {
    try {
      const { data } = (await loginMutation({
        variables: { data: { email, password } },
      })) as { data: { loginUser: LoginUserResponse } }
      console.log("data", data)

      const { token: newToken, user: userData } = data.loginUser
      setTokenInLocalStorage({ token: newToken })
      setToken(newToken)
      setUser(userData)
    } catch (error) {
      console.error("Login failed: ", error)
      throw error
    }
  }

  const register = async ({ email, password, name }: RegisterUserInput) => {
    try {
      const { data } = (await registerMutation({
        variables: { data: { email, password, name } },
      })) as { data: { registerUser: User } }

      await login({ email, password })
    } catch (error) {
      console.error("Registration error: ", error)
      throw error
    }
  }

  const logout = () => {
    removeTokenFromStorage()
    setToken(null)
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
