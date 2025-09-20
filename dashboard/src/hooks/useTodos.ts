"use client"
import { useMutation, useQuery } from "@apollo/client/react"
import {
  FETCH_MANY_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ARCHIVE_TODO,
  UPDATE_TODO,
} from "../graphql/todo-queries"
import { FETCH_MANY_COLLECTIONS } from "../graphql/collection-queries"
import {
  CreateTodoInput,
  Todo,
  FetchManyTodosResponse,
  CreateTodoResponse,
  DeleteTodoResponse,
  CompleteTodoResponse,
  ArchiveTodoResponse,
  CompleteTodoInput,
  UpdateTodoResponse,
  UpdateTodoInput,
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
  const [createTodoMutation, { loading, error }] = useMutation<CreateTodoResponse>(CREATE_TODO, {
    refetchQueries: [{ query: FETCH_MANY_TODOS }, { query: FETCH_MANY_COLLECTIONS }],
  })

  const createTodo = async (data: CreateTodoInput) => {
    try {
      const result = await createTodoMutation({
        variables: { data },
      })

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
  const [deleteTodoMutation, { loading, error }] = useMutation<DeleteTodoResponse>(DELETE_TODO, {
    refetchQueries: [{ query: FETCH_MANY_TODOS }, { query: FETCH_MANY_COLLECTIONS }],
  })

  const deleteTodo = async (id: string) => {
    try {
      const result = await deleteTodoMutation({ variables: { id } })

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
  const [completeTodoMutation, { loading, error }] = useMutation<CompleteTodoResponse>(
    COMPLETE_TODO,
    {
      refetchQueries: [{ query: FETCH_MANY_TODOS }, { query: FETCH_MANY_COLLECTIONS }],
    },
  )

  const completeTodo = async (data: CompleteTodoInput) => {
    try {
      const result = await completeTodoMutation({ variables: { data } })

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
  const [archiveTodoMutation, { loading, error }] = useMutation<ArchiveTodoResponse>(ARCHIVE_TODO, {
    refetchQueries: [{ query: FETCH_MANY_TODOS }, { query: FETCH_MANY_COLLECTIONS }],
  })

  const archiveTodo = async (id: string) => {
    try {
      const result = await archiveTodoMutation({ variables: { id } })

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
  const [updateTodoMutation, { loading, error }] = useMutation<UpdateTodoResponse>(UPDATE_TODO, {
    refetchQueries: [{ query: FETCH_MANY_TODOS }, { query: FETCH_MANY_COLLECTIONS }],
  })

  const updateTodo = async (data: UpdateTodoInput) => {
    try {
      const result = await updateTodoMutation({ variables: { data } })

      return result.data!.updateTodo
    } catch (error) {
      throw error
    }
  }

  return {
    updateTodo,
    loading,
    error,
  }
}
