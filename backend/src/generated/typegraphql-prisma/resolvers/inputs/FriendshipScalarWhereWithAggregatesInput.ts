import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumFriendStatusWithAggregatesFilter } from "../inputs/EnumFriendStatusWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FriendshipScalarWhereWithAggregatesInput", {})
export class FriendshipScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  friendId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFriendStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumFriendStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isDeleted?: BoolWithAggregatesFilter | undefined;
}
