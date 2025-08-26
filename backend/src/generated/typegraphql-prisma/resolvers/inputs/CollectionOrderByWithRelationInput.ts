import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorOrderByRelationAggregateInput } from "../inputs/CollectionCollaboratorOrderByRelationAggregateInput";
import { TodoOrderByRelationAggregateInput } from "../inputs/TodoOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionOrderByWithRelationInput", {})
export class CollectionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isDeleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isArchived?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  owner?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorOrderByRelationAggregateInput, {
    nullable: true
  })
  collaborators?: CollectionCollaboratorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoOrderByRelationAggregateInput, {
    nullable: true
  })
  todos?: TodoOrderByRelationAggregateInput | undefined;
}
