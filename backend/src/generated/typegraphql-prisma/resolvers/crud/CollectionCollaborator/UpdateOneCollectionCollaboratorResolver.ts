import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCollectionCollaboratorArgs } from "./args/UpdateOneCollectionCollaboratorArgs";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class UpdateOneCollectionCollaboratorResolver {
  @TypeGraphQL.Mutation(_returns => CollectionCollaborator, {
    nullable: true
  })
  async updateOneCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCollectionCollaboratorArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
