import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCollaborationsInput } from "../inputs/UserCreateWithoutCollaborationsInput";
import { UserUpdateWithoutCollaborationsInput } from "../inputs/UserUpdateWithoutCollaborationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCollaborationsInput", {})
export class UserUpsertWithoutCollaborationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCollaborationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCollaborationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCollaborationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCollaborationsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
