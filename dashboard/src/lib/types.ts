export interface User {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

export interface LoginUserInput {
  email: string
  password: string
}

export interface RegisterUserInput {
  email: string
  password: string
  name?: string
}

export interface LoginUserResponse {
  token: string
  user: User
}

export interface AuthContextType {
  user: User | null
  token: string | null
  login: ({ email, password }: LoginUserInput) => Promise<void>
  register: ({ email, password, name }: RegisterUserInput) => Promise<void>
  logout: () => void
  isLoading: boolean
}
