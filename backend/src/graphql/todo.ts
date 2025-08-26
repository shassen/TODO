import { ObjectType, Field, ID, Resolver, Query, Mutation, Arg, InputType } from "type-graphql"
import { prisma } from "../db/prismaClient"
import { Todo } from "../generated/typegraphql-prisma"

@Resolver(Todo)
export class TodoCustomResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return (await prisma.todo.findMany()) || []
  }

  // @Mutation(() => Todo)
  // async addTodo(@Arg("data") data: Todo): Promise<Todo> {
  //   const todo = await prisma.todo.create({
  //     data,
  //   })

  //   console.log({ todo })
  //   return todo
  // }

  // @Mutation(() => Todo)
  // async toggleTodo(@Arg("data") data: UpdateTodoInput): Promise<Todo> {
  //   const { id } = data
  //   const { completed } = await prisma.todo.findUniqueOrThrow({
  //     where: { id },
  //   })

  //   return await prisma.todo.update({
  //     where: { id },
  //     data: { completed: !completed },
  //   })
  // }
}
