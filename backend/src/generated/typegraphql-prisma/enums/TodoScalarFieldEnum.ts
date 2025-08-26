import * as TypeGraphQL from "type-graphql";

export enum TodoScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  completed = "completed",
  isDeleted = "isDeleted",
  isArchived = "isArchived",
  dueDate = "dueDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  archivedAt = "archivedAt",
  collectionId = "collectionId",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
  name: "TodoScalarFieldEnum",
  description: undefined,
});
