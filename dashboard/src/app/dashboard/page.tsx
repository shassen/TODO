"use client"
import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { Card } from "@/components/ui/Card"
import { Todo } from "../../hooks/useTodos"
import { useTodos } from "@/hooks/useTodos"

export default function DashboardPage() {
  const { todos, loading, error } = useTodos()
  // console.log("todos", todos)
  // console.log("loading", loading)
  // console.log("error", error)

  // Calculate stats from todos
  const totalTasks = todos.length
  const completedTasks = todos.filter((todo: Todo) => todo.completed).length
  const pendingTasks = totalTasks - completedTasks

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your todos...</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  if (error) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading todos: {error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try Again
            </button>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Total Tasks</h3>
                <p className="text-3xl font-bold text-blue-600">{totalTasks}</p>
                <p className="text-sm text-gray-500">
                  {totalTasks === 0
                    ? "No tasks yet"
                    : `${totalTasks} task${totalTasks === 1 ? "" : "s"}`}
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Completed</h3>
                <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
                <p className="text-sm text-gray-500">
                  {completedTasks === 0 ? "Great job!" : `${completedTasks} completed`}
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pending</h3>
                <p className="text-3xl font-bold text-yellow-600">{pendingTasks}</p>
                <p className="text-sm text-gray-500">
                  {pendingTasks === 0 ? "All done!" : `${pendingTasks} pending`}
                </p>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">• Create your first task</p>
                  <p className="text-gray-600">• Organize tasks into collections</p>
                  <p className="text-gray-600">• Set due dates and priorities</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
