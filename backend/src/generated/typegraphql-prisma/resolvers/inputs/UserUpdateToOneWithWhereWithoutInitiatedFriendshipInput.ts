import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutInitiatedFriendshipInput } from "../inputs/UserUpdateWithoutInitiatedFriendshipInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput", {})
export class UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutInitiatedFriendshipInput, {
    nullable: false
  })
  data!: UserUpdateWithoutInitiatedFriendshipInput;
}
