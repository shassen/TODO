import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Collection } from "../../../models/Collection";
import { CollectionCollaborator } from "../../../models/CollectionCollaborator";
import { Todo } from "../../../models/Todo";
import { User } from "../../../models/User";
import { CollectionCollaboratorsArgs } from "./args/CollectionCollaboratorsArgs";
import { CollectionTodosArgs } from "./args/CollectionTodosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Collection)
export class CollectionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() collection: Collection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collection.findUniqueOrThrow({
      where: {
        id: collection.id,
      },
    }).owner({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [CollectionCollaborator], {
    nullable: false
  })
  async collaborators(@TypeGraphQL.Root() collection: Collection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CollectionCollaboratorsArgs): Promise<CollectionCollaborator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collection.findUniqueOrThrow({
      where: {
        id: collection.id,
      },
    }).collaborators({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Todo], {
    nullable: false
  })
  async todos(@TypeGraphQL.Root() collection: Collection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CollectionTodosArgs): Promise<Todo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).collection.findUniqueOrThrow({
      where: {
        id: collection.id,
      },
    }).todos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
