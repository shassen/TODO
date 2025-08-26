import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCollectionCollaboratorArgs } from "./args/GroupByCollectionCollaboratorArgs";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { CollectionCollaboratorGroupBy } from "../../outputs/CollectionCollaboratorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class GroupByCollectionCollaboratorResolver {
  @TypeGraphQL.Query(_returns => [CollectionCollaboratorGroupBy], {
    nullable: false
  })
  async groupByCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCollectionCollaboratorArgs): Promise<CollectionCollaboratorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
