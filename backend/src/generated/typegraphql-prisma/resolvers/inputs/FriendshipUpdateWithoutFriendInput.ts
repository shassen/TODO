import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput } from "../inputs/UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("FriendshipUpdateWithoutFriendInput", {})
export class FriendshipUpdateWithoutFriendInput {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  status?: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput | undefined;
}
