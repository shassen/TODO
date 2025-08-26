import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCollaborationsInput } from "../inputs/UserCreateNestedOneWithoutCollaborationsInput";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("CollectionCollaboratorCreateWithoutCollectionInput", {})
export class CollectionCollaboratorCreateWithoutCollectionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  permission?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCollaborationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCollaborationsInput;
}
