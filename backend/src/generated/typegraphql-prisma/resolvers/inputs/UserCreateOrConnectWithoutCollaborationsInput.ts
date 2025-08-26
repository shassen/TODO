import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCollaborationsInput } from "../inputs/UserCreateWithoutCollaborationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCollaborationsInput", {})
export class UserCreateOrConnectWithoutCollaborationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCollaborationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCollaborationsInput;
}
