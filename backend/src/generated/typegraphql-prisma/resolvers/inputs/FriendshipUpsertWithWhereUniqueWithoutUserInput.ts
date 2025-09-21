import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutUserInput } from "../inputs/FriendshipCreateWithoutUserInput";
import { FriendshipUpdateWithoutUserInput } from "../inputs/FriendshipUpdateWithoutUserInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutUserInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutUserInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutUserInput;
}
