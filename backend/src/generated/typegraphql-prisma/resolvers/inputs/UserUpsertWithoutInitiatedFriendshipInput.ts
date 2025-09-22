import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInitiatedFriendshipInput } from "../inputs/UserCreateWithoutInitiatedFriendshipInput";
import { UserUpdateWithoutInitiatedFriendshipInput } from "../inputs/UserUpdateWithoutInitiatedFriendshipInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutInitiatedFriendshipInput", {})
export class UserUpsertWithoutInitiatedFriendshipInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutInitiatedFriendshipInput, {
    nullable: false
  })
  update!: UserUpdateWithoutInitiatedFriendshipInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInitiatedFriendshipInput, {
    nullable: false
  })
  create!: UserCreateWithoutInitiatedFriendshipInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
