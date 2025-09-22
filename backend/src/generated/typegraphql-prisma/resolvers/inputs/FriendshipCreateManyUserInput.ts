import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("FriendshipCreateManyUserInput", {})
export class FriendshipCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  friendId!: string;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  status?: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;
}
