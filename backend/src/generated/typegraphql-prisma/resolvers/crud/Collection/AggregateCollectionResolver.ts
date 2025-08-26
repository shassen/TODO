import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionArgs } from "./args/AggregateCollectionArgs";
import { Collection } from "../../../models/Collection";
import { AggregateCollection } from "../../outputs/AggregateCollection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Collection)
export class AggregateCollectionResolver {
  @TypeGraphQL.Query(_returns => AggregateCollection, {
    nullable: false
  })
  async aggregateCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCollectionArgs): Promise<AggregateCollection> {
    return getPrismaFromContext(ctx).collection.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
