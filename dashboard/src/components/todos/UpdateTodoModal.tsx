"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UpdateTodoForm } from "./UpdateTodoForm"
import { Todo } from "@/lib/types"

interface UpdateTodoModalProps {
  todo: Todo | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const UpdateTodoModal = ({ todo, open, onOpenChange }: UpdateTodoModalProps) => {
  const handleSuccess = () => {
    onOpenChange(false)
  }

  if (!todo) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
        </DialogHeader>
        <UpdateTodoForm todo={todo} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  )
}
