import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedFriendshipInput } from "../inputs/UserCreateWithoutReceivedFriendshipInput";
import { UserUpdateWithoutReceivedFriendshipInput } from "../inputs/UserUpdateWithoutReceivedFriendshipInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutReceivedFriendshipInput", {})
export class UserUpsertWithoutReceivedFriendshipInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedFriendshipInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReceivedFriendshipInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFriendshipInput, {
    nullable: false
  })
  create!: UserCreateWithoutReceivedFriendshipInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
