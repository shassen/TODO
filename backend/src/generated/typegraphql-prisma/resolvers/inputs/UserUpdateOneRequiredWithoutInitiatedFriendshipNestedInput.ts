import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInitiatedFriendshipInput } from "../inputs/UserCreateOrConnectWithoutInitiatedFriendshipInput";
import { UserCreateWithoutInitiatedFriendshipInput } from "../inputs/UserCreateWithoutInitiatedFriendshipInput";
import { UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput } from "../inputs/UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput";
import { UserUpsertWithoutInitiatedFriendshipInput } from "../inputs/UserUpsertWithoutInitiatedFriendshipInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput", {})
export class UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  create?: UserCreateWithoutInitiatedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInitiatedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutInitiatedFriendshipInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput | undefined;
}
