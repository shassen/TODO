"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { TabNavigation } from "@/components/layout/TabNavigation"
import { TodoList } from "@/components/todos/TodoList"
import { CreateTodoModal } from "@/components/todos/CreateTodoModal"
import { CollectionsList } from "@/components/collections/CollectionsList"
import { CreateCollectionModal } from "@/components/collections/CreateCollectionModal"
import { useTodos } from "@/hooks/useTodos"
import { useCollections } from "@/hooks/useCollections"

type TabId = "dashboard" | "todos" | "collections" | "friends" | "profile"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard")
  const { todos, loading: todosLoading, error: todosError } = useTodos()
  const { collections, loading: collectionsLoading, error: collectionsError } = useCollections()

  const activeTodos = todos?.filter((todo) => !todo.completed) || []

  const tabs = [
    {
      id: "dashboard" as TabId,
      label: "Dashboard",
    },
    {
      id: "todos" as TabId,
      label: "Todos",
      count: activeTodos.length,
    },
    {
      id: "collections" as TabId,
      label: "Collections",
      count: collections?.length || 0,
    },
    {
      id: "friends" as TabId,
      label: "Friends",
    },
    {
      id: "profile" as TabId,
      label: "Profile",
    },
  ]

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

  if (todosError || collectionsError) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">
              Error loading data: {todosError?.message || collectionsError?.message}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side - Collections */}
            <div className="space-y-4">
              <CollectionsList collections={collections} loading={collectionsLoading} />
              <CreateCollectionModal />
            </div>

            {/* Right side - Todos */}
            <div className="space-y-4">
              <TodoList todos={todos} loading={todosLoading} />
              <CreateTodoModal />
            </div>
          </div>
        )

      case "todos":
        return (
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="space-y-4">
                <TodoList todos={todos} loading={todosLoading} />
                <CreateTodoModal />
              </div>
            </div>
          </div>
        )

      case "collections":
        return (
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="space-y-4">
                <CollectionsList collections={collections} loading={collectionsLoading} />
                <CreateCollectionModal />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(tabId) => setActiveTab(tabId as TabId)}
            />

            {renderContent()}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
