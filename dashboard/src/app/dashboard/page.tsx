"use client"
import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { TodoList } from "@/components/todos/TodoList"
import { CreateTodoModal } from "@/components/todos/CreateTodoModal"
import { CollectionsList } from "@/components/collections/CollectionsList"
import { CreateCollectionModal } from "@/components/collections/CreateCollectionModal"
import { useTodos } from "@/hooks/useTodos"
import { useCollections } from "@/hooks/useCollections"

export default function DashboardPage() {
  const { todos, loading: todosLoading, error: todosError } = useTodos()
  const { collections, loading: collectionsLoading, error: collectionsError } = useCollections()

  if (todosLoading || collectionsLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left side - Todos */}
              <div className="space-y-4">
                <TodoList todos={todos} loading={todosLoading} />
                <CreateTodoModal />
              </div>

              {/* Right side - Collections */}
              <div className="space-y-4">
                <CollectionsList collections={collections} loading={collectionsLoading} />
                <CreateCollectionModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
