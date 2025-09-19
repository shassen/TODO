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
import { Collection, CollectionCollaborator, Todo } from "../generated/typegraphql-prisma"
import { GraphQLContext } from "../context/context"

@InputType("CreateCollectionInput")
export class CreateCollectionInput {
  @Field(() => String)
  name!: string

  @Field(() => String, { nullable: true })
  description?: string
}

@InputType("DeleteCollectionInput")
export class DeleteCollectionInput {
  @Field(() => String)
  id!: string
}

@InputType("UpdateCollectionInput")
export class UpdateCollectionInput {
  @Field(() => String)
  id!: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string
}

@InputType("GetCollaboratorsInput")
export class GetCollaboratorsInput {
  @Field(() => String)
  id!: string
}

@Resolver(Collection)
export class CollectionCustomResolver {
  @Query(() => [Collection])
  async fetchManyCollections(
    @Ctx() { user, collectionService, reqId }: GraphQLContext,
  ): Promise<Collection[]> {
    if (!user) {
      throw new Error("User ID is required to fetch collections")
    }

    const { userId } = user
    console.log("userId", userId)

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

  @Mutation(() => Collection)
  async deleteCollection(
    @Arg("data") data: DeleteCollectionInput,
    @Ctx() { user, collectionService, reqId }: GraphQLContext,
  ): Promise<Collection> {
    if (!user) {
      throw new Error("User ID is required to delete a collection")
    }
    const { userId } = user
    return collectionService.deleteCollection({ id: data.id, userId }, reqId)
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

  @FieldResolver(() => [CollectionCollaborator])
  async collaborators(
    @Root() collection: Collection,
    @Ctx() { collectionService, reqId, user }: GraphQLContext,
  ): Promise<CollectionCollaborator[]> {
    if (!user) {
      throw new Error("User ID is required to fetch collaborators")
    }
    const { userId } = user
    return collectionService.getCollaborators({ id: collection.id, userId }, reqId)
  }
}
