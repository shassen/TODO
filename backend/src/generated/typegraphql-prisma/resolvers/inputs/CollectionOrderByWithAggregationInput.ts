import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCountOrderByAggregateInput } from "../inputs/CollectionCountOrderByAggregateInput";
import { CollectionMaxOrderByAggregateInput } from "../inputs/CollectionMaxOrderByAggregateInput";
import { CollectionMinOrderByAggregateInput } from "../inputs/CollectionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionOrderByWithAggregationInput", {})
export class CollectionOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CollectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CollectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CollectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CollectionMinOrderByAggregateInput | undefined;
}
