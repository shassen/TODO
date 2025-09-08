import { ObjectType, Field, ID, Resolver, Query, Mutation, Arg, InputType, Ctx } from "type-graphql"
import { Todo } from "../generated/typegraphql-prisma"
import { GraphQLContext } from "../context/context"
import { InputJsonValue } from "../generated/prisma/runtime/library"
import { GraphQLJSON } from "graphql-scalars"

@InputType("CreateTodoInput")
export class CreateTodoInput {
  @Field(() => String)
  title!: string

  @Field(() => GraphQLJSON, { nullable: true })
  content?: InputJsonValue

  @Field(() => Date, { nullable: true })
  dueDate?: Date

  @Field(() => String, { nullable: true })
  collectionId?: string
}

@InputType("CompleteTodoInput")
export class CompleteTodoInput {
  @Field(() => String)
  id!: string

  @Field(() => Boolean)
  completed!: boolean
}

@Resolver(Todo)
export class TodoCustomResolver {
  @Query(() => [Todo])
  async fetchManyTodos(@Ctx() { user, todoService, reqId }: GraphQLContext): Promise<Todo[]> {
    if (!user) {
      throw new Error("User ID is required to fetch todos")
    }

    const { userId } = user
    return todoService.getManyTodos(reqId, { userId })
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg("data") data: CreateTodoInput,
    @Ctx() { user, todoService, reqId }: GraphQLContext,
  ): Promise<Todo> {
    if (!user) {
      throw new Error("User ID is required to create a todo")
    }

    const { userId } = user
    return todoService.createTodo(reqId, { userId, ...data })
  }

  @Mutation(() => Todo)
  async deleteTodo(
    @Arg("id") id: string,
    @Ctx() { user, todoService, reqId }: GraphQLContext,
  ): Promise<Todo> {
    if (!user) {
      throw new Error("User ID is required to delete a todo")
    }

    const { userId } = user
    return todoService.deleteTodo(reqId, { userId, id })
  }

  @Mutation(() => Todo)
  async completeTodo(
    @Arg("data") data: CompleteTodoInput,
    @Ctx() { user, todoService, reqId }: GraphQLContext,
  ): Promise<Todo> {
    if (!user) {
      throw new Error("User ID is required to complete a todo")
    }

    const { userId } = user
    return todoService.completeTodo(reqId, { userId, ...data })
  }

  @Mutation(() => Todo)
  async archiveTodo(
    @Arg("id") id: string,
    @Ctx() { user, todoService, reqId }: GraphQLContext,
  ): Promise<Todo> {
    if (!user) {
      throw new Error("User ID is required to archive a todo")
    }

    const { userId } = user
    return todoService.archiveTodo(reqId, { userId, id })
  }
}
