import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("EnumFriendStatusFieldUpdateOperationsInput", {})
export class EnumFriendStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  set?: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED" | undefined;
}
