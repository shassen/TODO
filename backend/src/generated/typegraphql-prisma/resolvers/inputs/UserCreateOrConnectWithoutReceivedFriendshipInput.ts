import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedFriendshipInput } from "../inputs/UserCreateWithoutReceivedFriendshipInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReceivedFriendshipInput", {})
export class UserCreateOrConnectWithoutReceivedFriendshipInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFriendshipInput, {
    nullable: false
  })
  create!: UserCreateWithoutReceivedFriendshipInput;
}
