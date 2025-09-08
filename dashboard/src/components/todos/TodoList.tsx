"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Todo } from "@/lib/types"
import { useArchiveTodo, useCompleteTodo, useDeleteTodo } from "@/hooks/useTodos"
import { ArchiveBoxIcon, TrashIcon } from "@heroicons/react/24/outline"

interface TodoListProps {
  todos: Todo[]
  loading?: boolean
}

export const TodoList = ({ todos, loading }: TodoListProps) => {
  const { deleteTodo, loading: deleteTodoLoading, error: deleteTodoError } = useDeleteTodo()
  const { archiveTodo, loading: archiveTodoLoading, error: archiveTodoError } = useArchiveTodo()
  const { completeTodo, loading: completeTodoLoading, error: completeTodoError } = useCompleteTodo()

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
                title="Complete todo"
                onClick={() => {
                  console.log("Toggle todo:", todo.id)
                  completeTodo({ id: todo.id, completed: !todo.completed })
                }}
                checked={todo.completed}
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
                    Complete
                  </Badge>
                )}

                <TrashIcon
                  title="Delete todo"
                  className="size-3 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={() => {
                    deleteTodo(todo.id)
                  }}
                />

                <ArchiveBoxIcon
                  title="Archive todo"
                  className="size-3 cursor-pointer text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                  onClick={() => {
                    archiveTodo(todo.id)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
