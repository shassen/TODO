"use client"
import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client/react"
import { AuthContext } from "@/hooks/useAuth"
import { AuthContextType, LoginUserInput, LoginUserResponse, RegisterUserInput } from "@/lib/types"
import {
  isTokenValid,
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
  removeTokenFromStorage,
} from "@/lib/auth"
import { LOGIN_USER, REGISTER_USER } from "@/graphql/auth-queries"

// users:
// email: cake@cake.com
// password: cakecake

// email: pizza@pizza.com
// password: password

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [loginMutation] = useMutation(LOGIN_USER)
  const [registerMutation] = useMutation(REGISTER_USER)

  useEffect(() => {
    const existingToken = getTokenFromLocalStorage()
    if (existingToken && isTokenValid({ token: existingToken })) {
      setToken(existingToken)
      setUser(null)
    }
    setIsLoading(false)
  }, [])

  const login = async ({ email, password }: LoginUserInput) => {
    try {
      const {
        data: { loginUser },
      } = (await loginMutation({
        variables: { data: { email, password } },
      })) as { data: { loginUser: LoginUserResponse } }

      const { token: newToken, user: userData } = loginUser
      setTokenInLocalStorage({ token: newToken })
      setToken(newToken)
      setUser(userData)
    } catch (error) {
      console.error("Login failed: ", error)
      throw error
    }
  }

  const register = async ({ email, password, name }: RegisterUserInput): Promise<void> => {
    try {
      await registerMutation({
        variables: { data: { email, password, name } },
      })

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
