import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("NestedEnumFriendStatusFilter", {})
export class NestedEnumFriendStatusFilter {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  equals?: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED" | undefined;

  @TypeGraphQL.Field(_type => [FriendStatus], {
    nullable: true
  })
  in?: Array<"PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED"> | undefined;

  @TypeGraphQL.Field(_type => [FriendStatus], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFriendStatusFilter, {
    nullable: true
  })
  not?: NestedEnumFriendStatusFilter | undefined;
}
