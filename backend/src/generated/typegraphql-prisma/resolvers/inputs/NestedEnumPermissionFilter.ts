import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("NestedEnumPermissionFilter", {})
export class NestedEnumPermissionFilter {
  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  equals?: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => [Permission], {
    nullable: true
  })
  in?: Array<"COMPLETE" | "VIEW" | "EDIT" | "OWNER"> | undefined;

  @TypeGraphQL.Field(_type => [Permission], {
    nullable: true
  })
  notIn?: Array<"COMPLETE" | "VIEW" | "EDIT" | "OWNER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPermissionFilter, {
    nullable: true
  })
  not?: NestedEnumPermissionFilter | undefined;
}
