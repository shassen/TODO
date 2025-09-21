import * as TypeGraphQL from "type-graphql";

export enum FriendStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  BLOCKED = "BLOCKED",
  UNFRIENDED = "UNFRIENDED"
}
TypeGraphQL.registerEnumType(FriendStatus, {
  name: "FriendStatus",
  description: undefined,
});
