import * as TypeGraphQL from "type-graphql";

export enum FriendshipScalarFieldEnum {
  id = "id",
  userId = "userId",
  friendId = "friendId",
  status = "status",
  isDeleted = "isDeleted",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(FriendshipScalarFieldEnum, {
  name: "FriendshipScalarFieldEnum",
  description: undefined,
});
