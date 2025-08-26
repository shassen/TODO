import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionCollaboratorArgs } from "./args/AggregateCollectionCollaboratorArgs";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { AggregateCollectionCollaborator } from "../../outputs/AggregateCollectionCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class AggregateCollectionCollaboratorResolver {
  @TypeGraphQL.Query(_returns => AggregateCollectionCollaborator, {
    nullable: false
  })
  async aggregateCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCollectionCollaboratorArgs): Promise<AggregateCollectionCollaborator> {
    return getPrismaFromContext(ctx).collectionCollaborator.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
