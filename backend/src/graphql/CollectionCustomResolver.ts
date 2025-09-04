import {
  Field,
  InputType,
  Mutation,
  Resolver,
  Query,
  Arg,
  Ctx,
  ObjectType,
  FieldResolver,
  Root,
} from "type-graphql"
import { Collection, Todo } from "../generated/typegraphql-prisma"
import { GraphQLContext } from "../context/context"

@InputType("CreateCollectionInput")
export class CreateCollectionInput {
  @Field(() => String)
  name!: string

  @Field(() => String, { nullable: true })
  description?: string
}

@Resolver(Collection)
export class CollectionCustomResolver {
  @Query(() => [Collection])
  async fetchManyCollectiones(
    @Ctx() { user, collectionService, reqId }: GraphQLContext,
  ): Promise<Collection[]> {
    if (!user) {
      throw new Error("User ID is required to fetch collections")
    }

    const { userId } = user

    return collectionService.getManyCollections({ userId }, reqId)
  }

  @Mutation(() => Collection)
  async createCollection(
    @Arg("data") data: CreateCollectionInput,
    @Ctx() { user, collectionService, reqId }: GraphQLContext,
  ): Promise<Collection> {
    if (!user) {
      throw new Error("User ID is required to create a collection")
    }
    const { userId } = user
    return collectionService.createCollection({ userId, ...data }, reqId)
  }

  @FieldResolver(() => [Todo])
  async todos(
    @Root() collection: Collection,
    @Ctx() { todoService, reqId, user }: GraphQLContext,
  ): Promise<Todo[]> {
    if (!user) {
      throw new Error("User ID is required to fetch todos")
    }

    const { userId } = user
    const { id } = collection
    return todoService.getManyTodosByCollectionId({ id, userId }, reqId)
  }
}
