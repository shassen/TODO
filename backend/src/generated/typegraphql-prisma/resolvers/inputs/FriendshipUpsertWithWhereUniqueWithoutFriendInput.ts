import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFriendInput } from "../inputs/FriendshipCreateWithoutFriendInput";
import { FriendshipUpdateWithoutFriendInput } from "../inputs/FriendshipUpdateWithoutFriendInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutFriendInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutFriendInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFriendInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutFriendInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFriendInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFriendInput;
}
