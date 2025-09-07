"use client"
import { useQuery } from "@apollo/client/react"
import { FETCH_MANY_TODOS } from "../graphql/queries"

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

interface FetchManyTodosResponse {
  fetchManyTodos: Todo[]
}

export const useTodos = () => {
  const { data, loading, error, refetch } = useQuery<FetchManyTodosResponse>(FETCH_MANY_TODOS, {
    errorPolicy: "all",
  })
  return {
    todos: data?.fetchManyTodos || [],
    loading,
    error,
    refetch,
  }
}
