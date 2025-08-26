import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPermissionFilter } from "../inputs/NestedEnumPermissionFilter";
import { NestedEnumPermissionWithAggregatesFilter } from "../inputs/NestedEnumPermissionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.InputType("EnumPermissionWithAggregatesFilter", {})
export class EnumPermissionWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPermissionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPermissionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPermissionFilter, {
    nullable: true
  })
  _min?: NestedEnumPermissionFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPermissionFilter, {
    nullable: true
  })
  _max?: NestedEnumPermissionFilter | undefined;
}
