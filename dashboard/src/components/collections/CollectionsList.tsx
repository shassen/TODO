"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Collection } from "@/lib/types"

interface CollectionsListProps {
  collections: Collection[]
  loading?: boolean
}

export const CollectionsList = ({ collections, loading }: CollectionsListProps) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Collections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (collections.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Collections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No collections yet!</p>
            <p className="text-sm text-gray-400">Create your first collection to organize todos.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-white border-gray-300 hover:border-gray-400 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{collection.name}</p>

                {collection.description && (
                  <p className="text-xs text-gray-500 mt-1 truncate">{collection.description}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {collection.todos.length} todos
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
