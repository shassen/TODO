import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutReceivedFriendshipInput } from "../inputs/UserUpdateWithoutReceivedFriendshipInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutReceivedFriendshipInput", {})
export class UserUpdateToOneWithWhereWithoutReceivedFriendshipInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedFriendshipInput, {
    nullable: false
  })
  data!: UserUpdateWithoutReceivedFriendshipInput;
}
