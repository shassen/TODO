import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCountCollaborationsArgs } from "./args/UserCountCollaborationsArgs";
import { UserCountCollectionsArgs } from "./args/UserCountCollectionsArgs";
import { UserCountInitiatedFriendshipArgs } from "./args/UserCountInitiatedFriendshipArgs";
import { UserCountReceivedFriendshipArgs } from "./args/UserCountReceivedFriendshipArgs";
import { UserCountTodosArgs } from "./args/UserCountTodosArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  collections!: number;
  collaborations!: number;
  todos!: number;
  initiatedFriendship!: number;
  receivedFriendship!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collections",
    nullable: false
  })
  getCollections(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCollectionsArgs): number {
    return root.collections;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collaborations",
    nullable: false
  })
  getCollaborations(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCollaborationsArgs): number {
    return root.collaborations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "todos",
    nullable: false
  })
  getTodos(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTodosArgs): number {
    return root.todos;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "initiatedFriendship",
    nullable: false
  })
  getInitiatedFriendship(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountInitiatedFriendshipArgs): number {
    return root.initiatedFriendship;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "receivedFriendship",
    nullable: false
  })
  getReceivedFriendship(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountReceivedFriendshipArgs): number {
    return root.receivedFriendship;
  }
}
