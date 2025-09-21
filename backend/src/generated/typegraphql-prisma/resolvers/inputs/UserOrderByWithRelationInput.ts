import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorOrderByRelationAggregateInput } from "../inputs/CollectionCollaboratorOrderByRelationAggregateInput";
import { CollectionOrderByRelationAggregateInput } from "../inputs/CollectionOrderByRelationAggregateInput";
import { FriendshipOrderByRelationAggregateInput } from "../inputs/FriendshipOrderByRelationAggregateInput";
import { TodoOrderByRelationAggregateInput } from "../inputs/TodoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  birthday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phoneNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isDeleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CollectionOrderByRelationAggregateInput, {
    nullable: true
  })
  collections?: CollectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorOrderByRelationAggregateInput, {
    nullable: true
  })
  collaborations?: CollectionCollaboratorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoOrderByRelationAggregateInput, {
    nullable: true
  })
  todos?: TodoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  initiatedFriendship?: FriendshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  receivedFriendship?: FriendshipOrderByRelationAggregateInput | undefined;
}
