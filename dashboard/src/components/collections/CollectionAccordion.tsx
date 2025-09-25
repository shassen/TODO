"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Collection, Todo } from "@/lib/types"
import { useArchiveTodo, useCompleteTodo, useDeleteTodo } from "@/hooks/useTodos"
import {
  ArchiveBoxIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import { UpdateTodoModal } from "../todos/UpdateTodoModal"
import { CreateTodoModal } from "../todos/CreateTodoModal"
import { CreateCollectionModal } from "./CreateCollectionModal"

interface CollectionAccordionProps {
  collections: Collection[]
  todos: Todo[]
  loading?: boolean
}

interface TodoItemProps {
  todo: Todo
  onTodoClick: (todo: Todo) => void
  onActionClick: (e: React.MouseEvent) => void
}

const TodoItem = ({ todo, onTodoClick, onActionClick }: TodoItemProps) => {
  const { deleteTodo } = useDeleteTodo()
  const { archiveTodo } = useArchiveTodo()
  const { completeTodo } = useCompleteTodo()

  return (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
        todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300"
      }`}
      onClick={() => onTodoClick(todo)}
    >
      <div onClick={onActionClick}>
        <Checkbox
          title="Complete todo"
          onClick={() => completeTodo({ id: todo.id, completed: !todo.completed })}
          checked={todo.completed}
        />
      </div>

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

      <div className="flex items-center space-x-2" onClick={onActionClick}>
        {todo.completed && (
          <Badge variant="secondary" className="text-xs">
            Complete
          </Badge>
        )}

        <TrashIcon
          title="Delete todo"
          className="size-4 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 rounded p-0.5"
          onClick={() => deleteTodo(todo.id)}
        />

        <ArchiveBoxIcon
          title="Archive todo"
          className="size-4 cursor-pointer text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded p-0.5"
          onClick={() => archiveTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export const CollectionAccordion = ({ collections, todos, loading }: CollectionAccordionProps) => {
  const [expandedCollections, setExpandedCollections] = useState<Set<string>>(new Set())
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setUpdateModalOpen(true)
  }

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const toggleCollection = (collectionId: string) => {
    const newExpanded = new Set(expandedCollections)
    if (newExpanded.has(collectionId)) {
      newExpanded.delete(collectionId)
    } else {
      newExpanded.add(collectionId)
    }
    setExpandedCollections(newExpanded)
  }

  // Group todos by collection
  const todosByCollection = new Map<string | null, Todo[]>()

  // Initialize with collections
  collections.forEach((collection) => {
    todosByCollection.set(collection.id, [])
  })

  // Add uncategorized todos
  todosByCollection.set(null, [])

  // Distribute todos
  todos.forEach((todo) => {
    const collectionId = todo.collectionId || null
    const existingTodos = todosByCollection.get(collectionId) || []
    todosByCollection.set(collectionId, [...existingTodos, todo])
  })

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Collections & Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Collections & Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Render collections with their todos */}
            {collections.map((collection) => {
              const collectionTodos = todosByCollection.get(collection.id) || []
              const isExpanded = expandedCollections.has(collection.id)

              return (
                <div key={collection.id} className="border rounded-lg overflow-hidden">
                  {/* Collection Header */}
                  <div
                    className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleCollection(collection.id)}
                  >
                    <div className="flex items-center space-x-3">
                      {isExpanded ? (
                        <ChevronDownIcon className="size-5 text-gray-500" />
                      ) : (
                        <ChevronRightIcon className="size-5 text-gray-500" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {collection.name}
                        </p>
                        {collection.description && (
                          <p className="text-xs text-gray-500 mt-1 truncate">
                            {collection.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <Badge variant="outline" className="text-xs">
                      {collectionTodos.length} todos
                    </Badge>
                  </div>

                  {/* Collection Todos */}
                  <div
                    className={`transition-all duration-500 ${
                      isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="p-4 space-y-3 bg-white">
                      {collectionTodos.length === 0 ? (
                        <div className="text-center py-4">
                          <p className="text-gray-500 text-sm">No todos in this collection</p>
                        </div>
                      ) : (
                        collectionTodos.map((todo) => (
                          <TodoItem
                            key={todo.id}
                            todo={todo}
                            onTodoClick={handleTodoClick}
                            onActionClick={handleActionClick}
                          />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Uncategorized Todos */}
            {todosByCollection.get(null)?.length! > 0 && (
              <div className="border rounded-lg overflow-hidden">
                <div
                  className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => toggleCollection("uncategorized")}
                >
                  <div className="flex items-center space-x-3">
                    {expandedCollections.has("uncategorized") ? (
                      <ChevronDownIcon className="size-5 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="size-5 text-gray-500" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Uncategorized Todos</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Todos not assigned to any collection
                      </p>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-xs">
                    {todosByCollection.get(null)?.length || 0} todos
                  </Badge>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedCollections.has("uncategorized")
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-4 space-y-3 bg-white">
                    {todosByCollection.get(null)?.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onTodoClick={handleTodoClick}
                        onActionClick={handleActionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {collections.length === 0 && todos.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No collections or todos yet!</p>
                <p className="text-sm text-gray-400">
                  Create your first collection or todo to get started.
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <CreateCollectionModal />
            <CreateTodoModal />
          </div>
        </CardContent>
      </Card>

      <UpdateTodoModal
        todo={selectedTodo}
        open={updateModalOpen}
        onOpenChange={setUpdateModalOpen}
      />
    </>
  )
}
