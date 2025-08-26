import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionRelationFilter } from "../inputs/CollectionRelationFilter";
import { EnumPermissionFilter } from "../inputs/EnumPermissionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CollectionCollaboratorWhereInput", {})
export class CollectionCollaboratorWhereInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereInput], {
    nullable: true
  })
  AND?: CollectionCollaboratorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereInput], {
    nullable: true
  })
  OR?: CollectionCollaboratorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereInput], {
    nullable: true
  })
  NOT?: CollectionCollaboratorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPermissionFilter, {
    nullable: true
  })
  permission?: EnumPermissionFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  collectionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CollectionRelationFilter, {
    nullable: true
  })
  collection?: CollectionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
