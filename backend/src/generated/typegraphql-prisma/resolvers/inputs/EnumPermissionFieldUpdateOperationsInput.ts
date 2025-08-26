import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("EnumPermissionFieldUpdateOperationsInput", {})
export class EnumPermissionFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  set?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;
}
