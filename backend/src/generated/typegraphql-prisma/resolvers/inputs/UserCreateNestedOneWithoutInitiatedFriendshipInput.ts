import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInitiatedFriendshipInput } from "../inputs/UserCreateOrConnectWithoutInitiatedFriendshipInput";
import { UserCreateWithoutInitiatedFriendshipInput } from "../inputs/UserCreateWithoutInitiatedFriendshipInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutInitiatedFriendshipInput", {})
export class UserCreateNestedOneWithoutInitiatedFriendshipInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  create?: UserCreateWithoutInitiatedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInitiatedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
