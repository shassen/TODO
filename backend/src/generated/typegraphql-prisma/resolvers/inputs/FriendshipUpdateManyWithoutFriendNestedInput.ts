import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFriendInputEnvelope } from "../inputs/FriendshipCreateManyFriendInputEnvelope";
import { FriendshipCreateOrConnectWithoutFriendInput } from "../inputs/FriendshipCreateOrConnectWithoutFriendInput";
import { FriendshipCreateWithoutFriendInput } from "../inputs/FriendshipCreateWithoutFriendInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutFriendInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutFriendInput";
import { FriendshipUpdateWithWhereUniqueWithoutFriendInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutFriendInput";
import { FriendshipUpsertWithWhereUniqueWithoutFriendInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutFriendInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutFriendNestedInput", {})
export class FriendshipUpdateManyWithoutFriendNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFriendInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFriendInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutFriendInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFriendInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFriendInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  set?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  delete?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutFriendInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutFriendInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
