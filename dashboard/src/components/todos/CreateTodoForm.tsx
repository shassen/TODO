import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { useCreateTodo } from "@/hooks/useTodos"

export const CreateTodoForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState({})
  const [dueDate, setDueDate] = useState<string>("")
  const { createTodo, loading, error } = useCreateTodo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      await createTodo({ title, dueDate: dueDate ? new Date(dueDate) : undefined })

      setTitle("")
      setContent({})
      setDueDate("")
    } catch (err) {
      console.error("failed to create todo", err)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">{error.message || "Failed to create todo"}</p>
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
            {loading ? "Creating..." : "Add Todo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
