import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCollectionCollaboratorArgs } from "./args/CreateOneCollectionCollaboratorArgs";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class CreateOneCollectionCollaboratorResolver {
  @TypeGraphQL.Mutation(_returns => CollectionCollaborator, {
    nullable: false
  })
  async createOneCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCollectionCollaboratorArgs): Promise<CollectionCollaborator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
