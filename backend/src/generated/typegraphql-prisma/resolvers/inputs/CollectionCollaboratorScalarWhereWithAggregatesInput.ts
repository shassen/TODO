import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { EnumPermissionWithAggregatesFilter } from "../inputs/EnumPermissionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CollectionCollaboratorScalarWhereWithAggregatesInput", {})
export class CollectionCollaboratorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CollectionCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CollectionCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CollectionCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPermissionWithAggregatesFilter, {
    nullable: true
  })
  permission?: EnumPermissionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  collectionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
