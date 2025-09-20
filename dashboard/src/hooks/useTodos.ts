"use client"
import { useMutation, useQuery } from "@apollo/client/react"
import {
  FETCH_MANY_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ARCHIVE_TODO,
} from "../graphql/todo-queries"
import {
  CreateTodoInput,
  Todo,
  FetchManyTodosResponse,
  CreateTodoResponse,
  DeleteTodoResponse,
  CompleteTodoResponse,
  ArchiveTodoResponse,
  CompleteTodoInput,
} from "../lib/types"

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

export const useCreateTodo = () => {
  const [createTodoMutation, { loading, error }] = useMutation<CreateTodoResponse>(CREATE_TODO)
  const { refetch } = useTodos()

  const createTodo = async (data: CreateTodoInput) => {
    try {
      const result = await createTodoMutation({
        variables: { data },
      })

      await refetch()

      return result.data!.createTodo
    } catch (error) {
      throw error
    }
  }
  return {
    createTodo,
    loading,
    error,
  }
}

export const useDeleteTodo = () => {
  const [deleteTodoMutation, { loading, error }] = useMutation<DeleteTodoResponse>(DELETE_TODO)
  const { refetch } = useTodos()

  const deleteTodo = async (id: string) => {
    try {
      const result = await deleteTodoMutation({ variables: { id } })

      await refetch()

      return result.data!.deleteTodo
    } catch (error) {
      throw error
    }
  }

  return {
    deleteTodo,
    loading,
    error,
  }
}

export const useCompleteTodo = () => {
  const [completeTodoMutation, { loading, error }] =
    useMutation<CompleteTodoResponse>(COMPLETE_TODO)
  const { refetch } = useTodos()

  const completeTodo = async (data: CompleteTodoInput) => {
    try {
      const result = await completeTodoMutation({ variables: { data } })

      await refetch()

      return result.data!.completeTodo
    } catch (error) {
      throw error
    }
  }

  return {
    completeTodo,
    loading,
    error,
  }
}

export const useArchiveTodo = () => {
  const [archiveTodoMutation, { loading, error }] = useMutation<ArchiveTodoResponse>(ARCHIVE_TODO)
  const { refetch } = useTodos()

  const archiveTodo = async (id: string) => {
    try {
      const result = await archiveTodoMutation({ variables: { id } })

      await refetch()

      return result.data!.archiveTodo
    } catch (error) {
      throw error
    }
  }

  return {
    archiveTodo,
    loading,
    error,
  }
}

export const useUpdateTodo = () => {
  console.log("useUpdateTodo")
}
