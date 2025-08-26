import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CollectionCollaboratorListRelationFilter } from "../inputs/CollectionCollaboratorListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TodoListRelationFilter } from "../inputs/TodoListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CollectionWhereInput", {})
export class CollectionWhereInput {
  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  AND?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  OR?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  NOT?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isDeleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isArchived?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorListRelationFilter, {
    nullable: true
  })
  collaborators?: CollectionCollaboratorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TodoListRelationFilter, {
    nullable: true
  })
  todos?: TodoListRelationFilter | undefined;
}
