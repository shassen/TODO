import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { EnumPermissionFilter } from "../inputs/EnumPermissionFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CollectionCollaboratorScalarWhereInput", {})
export class CollectionCollaboratorScalarWhereInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereInput], {
    nullable: true
  })
  AND?: CollectionCollaboratorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereInput], {
    nullable: true
  })
  OR?: CollectionCollaboratorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereInput], {
    nullable: true
  })
  NOT?: CollectionCollaboratorScalarWhereInput[] | undefined;

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
}
