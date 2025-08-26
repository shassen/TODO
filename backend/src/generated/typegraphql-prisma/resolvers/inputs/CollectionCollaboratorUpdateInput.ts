import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput } from "../inputs/CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput";
import { UserUpdateOneRequiredWithoutCollaborationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCollaborationsNestedInput";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateInput", {})
export class CollectionCollaboratorUpdateInput {
  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  permission?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput, {
    nullable: true
  })
  collection?: CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCollaborationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput | undefined;
}
