import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumFriendStatusFilter } from "../inputs/NestedEnumFriendStatusFilter";
import { NestedEnumFriendStatusWithAggregatesFilter } from "../inputs/NestedEnumFriendStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("EnumFriendStatusWithAggregatesFilter", {})
export class EnumFriendStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumFriendStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumFriendStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFriendStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumFriendStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFriendStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumFriendStatusFilter | undefined;
}
