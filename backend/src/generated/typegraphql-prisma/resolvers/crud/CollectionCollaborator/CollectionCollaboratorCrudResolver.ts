import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionCollaboratorArgs } from "./args/AggregateCollectionCollaboratorArgs";
import { CreateManyCollectionCollaboratorArgs } from "./args/CreateManyCollectionCollaboratorArgs";
import { CreateOneCollectionCollaboratorArgs } from "./args/CreateOneCollectionCollaboratorArgs";
import { DeleteManyCollectionCollaboratorArgs } from "./args/DeleteManyCollectionCollaboratorArgs";
import { DeleteOneCollectionCollaboratorArgs } from "./args/DeleteOneCollectionCollaboratorArgs";
import { FindFirstCollectionCollaboratorArgs } from "./args/FindFirstCollectionCollaboratorArgs";
import { FindFirstCollectionCollaboratorOrThrowArgs } from "./args/FindFirstCollectionCollaboratorOrThrowArgs";
import { FindManyCollectionCollaboratorArgs } from "./args/FindManyCollectionCollaboratorArgs";
import { FindUniqueCollectionCollaboratorArgs } from "./args/FindUniqueCollectionCollaboratorArgs";
import { FindUniqueCollectionCollaboratorOrThrowArgs } from "./args/FindUniqueCollectionCollaboratorOrThrowArgs";
import { GroupByCollectionCollaboratorArgs } from "./args/GroupByCollectionCollaboratorArgs";
import { UpdateManyCollectionCollaboratorArgs } from "./args/UpdateManyCollectionCollaboratorArgs";
import { UpdateOneCollectionCollaboratorArgs } from "./args/UpdateOneCollectionCollaboratorArgs";
import { UpsertOneCollectionCollaboratorArgs } from "./args/UpsertOneCollectionCollaboratorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCollectionCollaborator } from "../../outputs/AggregateCollectionCollaborator";
import { CollectionCollaboratorGroupBy } from "../../outputs/CollectionCollaboratorGroupBy";

@TypeGraphQL.Resolver(_of => CollectionCollaborator)
export class CollectionCollaboratorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCollectionCollaborator, {
    nullable: false
  })
  async aggregateCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCollectionCollaboratorArgs): Promise<AggregateCollectionCollaborator> {
    return getPrismaFromContext(ctx).collectionCollaborator.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCollectionCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCollectionCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CollectionCollaborator, {
    nullable: true
  })
  async deleteOneCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCollectionCollaboratorArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CollectionCollaborator, {
    nullable: true
  })
  async findFirstCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCollectionCollaboratorArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [CollectionCollaborator], {
    nullable: false
  })
  async collectionCollaborators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCollectionCollaboratorArgs): Promise<CollectionCollaborator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CollectionCollaborator, {
    nullable: true
  })
  async collectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCollectionCollaboratorArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CollectionCollaborator, {
    nullable: true
  })
  async getCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCollectionCollaboratorOrThrowArgs): Promise<CollectionCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCollectionCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => CollectionCollaborator, {
    nullable: false
  })
  async upsertOneCollectionCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCollectionCollaboratorArgs): Promise<CollectionCollaborator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collectionCollaborator.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
