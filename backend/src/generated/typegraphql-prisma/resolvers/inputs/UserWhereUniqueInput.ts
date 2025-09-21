import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CollectionCollaboratorListRelationFilter } from "../inputs/CollectionCollaboratorListRelationFilter";
import { CollectionListRelationFilter } from "../inputs/CollectionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FriendshipListRelationFilter } from "../inputs/FriendshipListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TodoListRelationFilter } from "../inputs/TodoListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  birthday?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phoneNumber?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isDeleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionListRelationFilter, {
    nullable: true
  })
  collections?: CollectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorListRelationFilter, {
    nullable: true
  })
  collaborations?: CollectionCollaboratorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TodoListRelationFilter, {
    nullable: true
  })
  todos?: TodoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  initiatedFriendship?: FriendshipListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  receivedFriendship?: FriendshipListRelationFilter | undefined;
}
