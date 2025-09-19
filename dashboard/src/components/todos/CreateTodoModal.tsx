"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button"
import { CreateTodoForm } from "./CreateTodoForm"

export const CreateTodoModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Todo</DialogTitle>
        </DialogHeader>
        <CreateTodoForm />
      </DialogContent>
    </Dialog>
  )
}
