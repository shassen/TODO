import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCountOrderByAggregateInput } from "../inputs/FriendshipCountOrderByAggregateInput";
import { FriendshipMaxOrderByAggregateInput } from "../inputs/FriendshipMaxOrderByAggregateInput";
import { FriendshipMinOrderByAggregateInput } from "../inputs/FriendshipMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FriendshipOrderByWithAggregationInput", {})
export class FriendshipOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  friendId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isDeleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FriendshipCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FriendshipCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FriendshipMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FriendshipMinOrderByAggregateInput | undefined;
}
