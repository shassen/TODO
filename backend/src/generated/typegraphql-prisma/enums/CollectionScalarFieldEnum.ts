import * as TypeGraphQL from "type-graphql";

export enum CollectionScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  isDeleted = "isDeleted",
  isActive = "isActive",
  isArchived = "isArchived",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  archivedAt = "archivedAt",
  ownerId = "ownerId"
}
TypeGraphQL.registerEnumType(CollectionScalarFieldEnum, {
  name: "CollectionScalarFieldEnum",
  description: undefined,
});
