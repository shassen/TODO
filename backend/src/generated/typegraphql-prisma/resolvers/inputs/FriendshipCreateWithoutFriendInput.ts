import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutInitiatedFriendshipInput } from "../inputs/UserCreateNestedOneWithoutInitiatedFriendshipInput";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("FriendshipCreateWithoutFriendInput", {})
export class FriendshipCreateWithoutFriendInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  status?: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInitiatedFriendshipInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutInitiatedFriendshipInput;
}
