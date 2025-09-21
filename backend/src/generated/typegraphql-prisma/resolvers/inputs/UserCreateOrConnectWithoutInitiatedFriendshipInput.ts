import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInitiatedFriendshipInput } from "../inputs/UserCreateWithoutInitiatedFriendshipInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutInitiatedFriendshipInput", {})
export class UserCreateOrConnectWithoutInitiatedFriendshipInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInitiatedFriendshipInput, {
    nullable: false
  })
  create!: UserCreateWithoutInitiatedFriendshipInput;
}
