import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCountOrderByAggregateInput } from "../inputs/CollectionCollaboratorCountOrderByAggregateInput";
import { CollectionCollaboratorMaxOrderByAggregateInput } from "../inputs/CollectionCollaboratorMaxOrderByAggregateInput";
import { CollectionCollaboratorMinOrderByAggregateInput } from "../inputs/CollectionCollaboratorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionCollaboratorOrderByWithAggregationInput", {})
export class CollectionCollaboratorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  permission?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collectionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CollectionCollaboratorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CollectionCollaboratorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CollectionCollaboratorMinOrderByAggregateInput | undefined;
}
