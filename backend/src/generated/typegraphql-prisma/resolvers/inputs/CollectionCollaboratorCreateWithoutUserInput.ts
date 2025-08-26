import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateNestedOneWithoutCollaboratorsInput } from "../inputs/CollectionCreateNestedOneWithoutCollaboratorsInput";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("CollectionCollaboratorCreateWithoutUserInput", {})
export class CollectionCollaboratorCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  permission?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateNestedOneWithoutCollaboratorsInput, {
    nullable: false
  })
  collection!: CollectionCreateNestedOneWithoutCollaboratorsInput;
}
