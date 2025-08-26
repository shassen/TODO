import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCollectionCollaboratorOrThrowArgs } from "./args/FindFirstCollectionCollaboratorOrThrowArgs";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class FindFirstCollectionCollaboratorOrThrowResolver {
  @TypeGraphQL.Query(_returns => CollectionCollaborator, {
    nullable: true
  })
  async findFirstCollectionCollaboratorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCollectionCollaboratorOrThrowArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
