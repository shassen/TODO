"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Todo } from "@/lib/types"

interface TodoListProps {
  todos: Todo[]
  loading?: boolean
}

export const TodoList = ({ todos, loading }: TodoListProps) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (todos.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No todos yet!</p>
            <p className="text-sm text-gray-400">Create your first todo to get started.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Todos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center space-x-3 p-3 rounded-lg border ${
                todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300"
              }`}
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => {
                  // TODO: Implement toggle completion
                  console.log("Toggle todo:", todo.id)
                }}
              />

              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    todo.completed ? "line-through text-gray-500" : "text-gray-900"
                  }`}
                >
                  {todo.title}
                </p>

                {todo.dueDate && (
                  <p className="text-xs text-gray-500 mt-1">
                    Due: {new Date(todo.dueDate).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {todo.completed && (
                  <Badge variant="secondary" className="text-xs">
                    Done
                  </Badge>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    // TODO: Implement delete
                    console.log("Delete todo:", todo.id)
                  }}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  ×
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
