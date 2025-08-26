import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorWhereInput } from "../inputs/CollectionCollaboratorWhereInput";

@TypeGraphQL.InputType("CollectionCollaboratorListRelationFilter", {})
export class CollectionCollaboratorListRelationFilter {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  every?: CollectionCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  some?: CollectionCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  none?: CollectionCollaboratorWhereInput | undefined;
}
