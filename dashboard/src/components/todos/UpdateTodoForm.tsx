"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { useUpdateTodo } from "@/hooks/useTodos"
import { useCollections } from "@/hooks/useCollections"
import { Todo } from "@/lib/types"
import { X } from "lucide-react"

interface UpdateTodoFormProps {
  todo: Todo
  onSuccess?: () => void
}

export const UpdateTodoForm = ({ todo, onSuccess }: UpdateTodoFormProps) => {
  const [title, setTitle] = useState(todo.title)
  const [content, setContent] = useState(todo.content || {})
  const [dueDate, setDueDate] = useState<string>(
    todo.dueDate ? new Date(todo.dueDate).toISOString().split("T")[0] : "",
  )
  const [collectionId, setCollectionId] = useState<string | undefined>(
    todo.collectionId || undefined,
  )
  const { updateTodo, loading, error } = useUpdateTodo()
  const { collections, loading: collectionsLoading } = useCollections()

  useEffect(() => {
    setTitle(todo.title)
    setContent(todo.content || {})
    setDueDate(todo.dueDate ? new Date(todo.dueDate).toISOString().split("T")[0] : "")
    setCollectionId(todo.collectionId || undefined)
  }, [todo])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      await updateTodo({
        id: todo.id,
        title: title.trim(),
        dueDate: dueDate ? new Date(dueDate) : undefined,
        collectionId: collectionId || undefined,
      })

      onSuccess?.()
    } catch (err) {
      console.error("failed to update todo", err)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">{error.message || "Failed to update todo"}</p>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              Task Title
            </label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="collection" className="text-sm font-medium text-gray-700">
              Collection (Optional)
            </label>
            <div className="flex items-center gap-2">
              <Select
                value={collectionId}
                onValueChange={setCollectionId}
                disabled={collectionsLoading}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select a collection" />
                </SelectTrigger>
                <SelectContent>
                  {collections.map((collection) => (
                    <SelectItem key={collection.id} value={collection.id}>
                      {collection.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {collectionId && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setCollectionId(undefined)}
                  className="shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dueDate" className="text-sm font-medium text-gray-700">
              Due Date (Optional)
            </label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading || !title.trim()}>
            {loading ? "Updating..." : "Update Todo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
