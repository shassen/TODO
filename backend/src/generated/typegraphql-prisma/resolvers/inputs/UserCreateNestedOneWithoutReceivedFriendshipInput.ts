import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedFriendshipInput } from "../inputs/UserCreateOrConnectWithoutReceivedFriendshipInput";
import { UserCreateWithoutReceivedFriendshipInput } from "../inputs/UserCreateWithoutReceivedFriendshipInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReceivedFriendshipInput", {})
export class UserCreateNestedOneWithoutReceivedFriendshipInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedFriendshipInput, {
    nullable: true
  })
  create?: UserCreateWithoutReceivedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedFriendshipInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
