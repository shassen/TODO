import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateManyMutationInput", {})
export class CollectionCollaboratorUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  permission?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;
}
