import * as TypeGraphQL from "type-graphql";

export enum Permission {
  COMPLETE = "COMPLETE",
  VIEW = "VIEW",
  EDIT = "EDIT",
  OWNER = "OWNER"
}
TypeGraphQL.registerEnumType(Permission, {
  name: "Permission",
  description: undefined,
});
