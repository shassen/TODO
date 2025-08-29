import { jwtDecode } from "jwt-decode"

interface JWTPayload {
  userId: string
  email: string
  exp: number
}

export const isTokenValid = ({ token }: { token: string }): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token)
    const currentTime = Date.now() / 1000
    return decoded.exp > currentTime
  } catch (error) {
    console.error("Error decoding token: ", error)
    return false
  }
}

export const getTokenFromLocalStorage = (): string | null => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("token")
}

export const setTokenInLocalStorage = ({ token }: { token: string }): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("token", token)
}

export const removeTokenFromStorage = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem("token")
}

export const getUserFromToken = ({ token }: { token: string }): JWTPayload | null => {
  try {
    return jwtDecode<JWTPayload>(token)
  } catch (error) {
    console.error("Error decoding token: ", error)
    return null
  }
}
