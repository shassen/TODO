import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyUserInputEnvelope } from "../inputs/FriendshipCreateManyUserInputEnvelope";
import { FriendshipCreateOrConnectWithoutUserInput } from "../inputs/FriendshipCreateOrConnectWithoutUserInput";
import { FriendshipCreateWithoutUserInput } from "../inputs/FriendshipCreateWithoutUserInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutUserInput", {})
export class FriendshipCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutUserInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
