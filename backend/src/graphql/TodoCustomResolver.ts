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

@Resolver(Todo)
export class TodoCustomResolver {
  @Query(() => [Todo])
  async fetchManyTodos(@Ctx() { user, todoService }: GraphQLContext): Promise<Todo[]> {
    if (!user) {
      throw new Error("User ID is required to fetch todos")
    }

    const { userId } = user
    return todoService.getManyTodos({ userId })
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg("data") data: CreateTodoInput,
    @Ctx() { user, todoService }: GraphQLContext,
  ): Promise<Todo> {
    if (!user) {
      throw new Error("User ID is required to create a todo")
    }

    const { userId } = user
    return todoService.createTodo({ userId, ...data })
  }
}
