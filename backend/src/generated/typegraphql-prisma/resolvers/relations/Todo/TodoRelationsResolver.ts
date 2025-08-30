import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Collection } from "../../../models/Collection";
import { Todo } from "../../../models/Todo";
import { User } from "../../../models/User";
import { TodoCollectionArgs } from "./args/TodoCollectionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class TodoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Collection, {
    nullable: true
  })
  async collection(@TypeGraphQL.Root() todo: Todo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TodoCollectionArgs): Promise<Collection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).todo.findUniqueOrThrow({
      where: {
        id: todo.id,
      },
    }).collection({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() todo: Todo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).todo.findUniqueOrThrow({
      where: {
        id: todo.id,
      },
    }).creator({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
