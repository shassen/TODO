import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyUserInputEnvelope } from "../inputs/FriendshipCreateManyUserInputEnvelope";
import { FriendshipCreateOrConnectWithoutUserInput } from "../inputs/FriendshipCreateOrConnectWithoutUserInput";
import { FriendshipCreateWithoutUserInput } from "../inputs/FriendshipCreateWithoutUserInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutUserInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutUserInput";
import { FriendshipUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutUserInput";
import { FriendshipUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutUserInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutUserNestedInput", {})
export class FriendshipUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutUserInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
