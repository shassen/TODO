import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Collection } from "../../../models/Collection";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class CollectionCollaboratorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Collection, {
    nullable: false
  })
  async collection(@TypeGraphQL.Root() collectionCollaborator: CollectionCollaborator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Collection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findUniqueOrThrow({
      where: {
        id: collectionCollaborator.id,
      },
    }).collection({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() collectionCollaborator: CollectionCollaborator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findUniqueOrThrow({
      where: {
        id: collectionCollaborator.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
