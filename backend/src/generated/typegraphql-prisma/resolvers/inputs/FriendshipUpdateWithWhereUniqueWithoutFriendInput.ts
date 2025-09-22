import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutFriendInput } from "../inputs/FriendshipUpdateWithoutFriendInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutFriendInput", {})
export class FriendshipUpdateWithWhereUniqueWithoutFriendInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFriendInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutFriendInput;
}
