"use client"
import { useMutation, useQuery } from "@apollo/client/react"
import { FETCH_MANY_TODOS, CREATE_TODO } from "../graphql/queries"
import { CreateTodoInput, Todo, FetchManyTodosResponse, CreateTodoResponse } from "../lib/types"

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
