"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { useCreateCollection } from "@/hooks/useCollections"

export const CreateCollectionForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const { createCollection, loading } = useCreateCollection()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Collection name is required")
      return
    }

    try {
      await createCollection({
        name: name.trim(),
        description: description.trim() || "",
      })

      // Reset form
      setName("")
      setDescription("")
    } catch (err) {
      // setError(err instanceof Error ? err.message : "Failed to create collection")
      console.error("failed to create collection", err)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Collection</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="collectionName" className="block text-sm font-medium text-gray-700">
              Collection Name
            </label>
            <Input
              id="collectionName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Work Projects"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="collectionDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description (Optional)
            </label>
            <Input
              id="collectionDescription"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of this collection"
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading || !name.trim()}>
            {loading ? "Creating..." : "Create Collection"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
