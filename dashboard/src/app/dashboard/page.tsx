"use client"
import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Todo } from "@/lib/types"
import { useTodos } from "@/hooks/useTodos"
import { CreateTodoForm } from "@/components/todos/CreateTodoForm"
import { TodoList } from "@/components/todos/TodoList"

export default function DashboardPage() {
  const { todos, loading, error } = useTodos()

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
            <Button onClick={() => window.location.reload()}>Try Again</Button>
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
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{totalTasks}</p>
                  <p className="text-sm text-gray-500">
                    {totalTasks === 0
                      ? "No tasks yet"
                      : `${totalTasks} task${totalTasks === 1 ? "" : "s"}`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
                  <p className="text-sm text-gray-500">
                    {completedTasks === 0 ? "Great job!" : `${completedTasks} completed`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-600">{pendingTasks}</p>
                  <p className="text-sm text-gray-500">
                    {pendingTasks === 0 ? "All done!" : `${pendingTasks} pending`}
                  </p>
                </CardContent>
              </Card>
            </div> */}

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CreateTodoForm />
              <TodoList todos={todos} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
