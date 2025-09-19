"use client"

import { useQuery, useMutation } from "@apollo/client/react"
import {
  FETCH_MANY_COLLECTIONS,
  CREATE_COLLECTION,
  DELETE_COLLECTION,
  // UPDATE_COLLECTION,
} from "@/graphql/collection-queries"
import {
  CreateCollectionInput,
  CreateCollectionResponse,
  DeleteCollectionResponse,
  FetchManyCollectionsResponse,
} from "@/lib/types"

export const useCollections = () => {
  const { data, loading, error, refetch } =
    useQuery<FetchManyCollectionsResponse>(FETCH_MANY_COLLECTIONS)

  return {
    collections: data?.fetchManyCollections || [],
    loading,
    error,
    refetch,
  }
}

export const useCreateCollection = () => {
  const [createCollectionMutation, { loading, error }] =
    useMutation<CreateCollectionResponse>(CREATE_COLLECTION)
  const { refetch } = useCollections()

  const createCollection = async (data: CreateCollectionInput) => {
    try {
      const result = await createCollectionMutation({ variables: { data } })
      await refetch()
      return result.data!.createCollection
    } catch (error) {
      throw error
    }
  }

  return {
    createCollection,
    loading,
    error,
  }
}

export const useDeleteCollection = () => {
  const [deleteCollectionMutation, { loading, error }] =
    useMutation<DeleteCollectionResponse>(DELETE_COLLECTION)
  const { refetch } = useCollections()

  const deleteCollection = async (id: string) => {
    try {
      const result = await deleteCollectionMutation({ variables: { id } })
      await refetch()
      return result.data!.deleteCollection
    } catch (error) {
      throw error
    }
  }

  return {
    deleteCollection,
    loading,
    error,
  }
}
