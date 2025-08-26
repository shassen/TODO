import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCollaborationsInput } from "../inputs/UserCreateOrConnectWithoutCollaborationsInput";
import { UserCreateWithoutCollaborationsInput } from "../inputs/UserCreateWithoutCollaborationsInput";
import { UserUpdateToOneWithWhereWithoutCollaborationsInput } from "../inputs/UserUpdateToOneWithWhereWithoutCollaborationsInput";
import { UserUpsertWithoutCollaborationsInput } from "../inputs/UserUpsertWithoutCollaborationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCollaborationsNestedInput", {})
export class UserUpdateOneRequiredWithoutCollaborationsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCollaborationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCollaborationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCollaborationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCollaborationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCollaborationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCollaborationsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCollaborationsInput | undefined;
}
