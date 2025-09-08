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

export interface Todo {
  id: string
  title: string
  completed: boolean
  dueDate?: string
  createdAt: string
  updatedAt: string
  creatorId: string
  collectionId?: string
  content?: JSON
  isArchived: boolean
  isDeleted: boolean
  archivedAt?: string
  deletedAt?: string
}

export interface FetchManyTodosResponse {
  fetchManyTodos: Todo[]
}

export interface CreateTodoInput {
  title: string
  content?: JSON
  dueDate?: Date
  collectionId?: string
}

export interface CreateTodoResponse {
  createTodo: Todo
}

export interface DeleteTodoResponse {
  deleteTodo: Todo
}

export interface CompleteTodoResponse {
  completeTodo: Todo
}

export interface ArchiveTodoResponse {
  archiveTodo: Todo
}

export interface CompleteTodoInput {
  id: string
  completed: boolean
}
