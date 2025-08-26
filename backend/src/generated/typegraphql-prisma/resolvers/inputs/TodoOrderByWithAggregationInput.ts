import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCountOrderByAggregateInput } from "../inputs/TodoCountOrderByAggregateInput";
import { TodoMaxOrderByAggregateInput } from "../inputs/TodoMaxOrderByAggregateInput";
import { TodoMinOrderByAggregateInput } from "../inputs/TodoMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TodoOrderByWithAggregationInput", {})
export class TodoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  completed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isDeleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isArchived?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dueDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collectionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TodoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TodoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TodoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TodoMinOrderByAggregateInput | undefined;
}
