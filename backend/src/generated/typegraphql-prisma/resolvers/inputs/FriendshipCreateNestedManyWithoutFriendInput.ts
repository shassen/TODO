import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFriendInputEnvelope } from "../inputs/FriendshipCreateManyFriendInputEnvelope";
import { FriendshipCreateOrConnectWithoutFriendInput } from "../inputs/FriendshipCreateOrConnectWithoutFriendInput";
import { FriendshipCreateWithoutFriendInput } from "../inputs/FriendshipCreateWithoutFriendInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutFriendInput", {})
export class FriendshipCreateNestedManyWithoutFriendInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFriendInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFriendInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFriendInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFriendInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
