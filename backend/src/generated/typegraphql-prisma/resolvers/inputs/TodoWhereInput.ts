import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CollectionNullableRelationFilter } from "../inputs/CollectionNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TodoWhereInput", {})
export class TodoWhereInput {
  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  AND?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  OR?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  NOT?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  content?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  completed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isDeleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isArchived?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  dueDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  collectionId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionNullableRelationFilter, {
    nullable: true
  })
  collection?: CollectionNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined;
}
