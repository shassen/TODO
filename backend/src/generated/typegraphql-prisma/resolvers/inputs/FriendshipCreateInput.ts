import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutInitiatedFriendshipInput } from "../inputs/UserCreateNestedOneWithoutInitiatedFriendshipInput";
import { UserCreateNestedOneWithoutReceivedFriendshipInput } from "../inputs/UserCreateNestedOneWithoutReceivedFriendshipInput";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("FriendshipCreateInput", {})
export class FriendshipCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReceivedFriendshipInput, {
    nullable: false
  })
  friend!: UserCreateNestedOneWithoutReceivedFriendshipInput;
}
