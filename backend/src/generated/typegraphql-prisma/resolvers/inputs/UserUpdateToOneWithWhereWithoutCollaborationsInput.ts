import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutCollaborationsInput } from "../inputs/UserUpdateWithoutCollaborationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCollaborationsInput", {})
export class UserUpdateToOneWithWhereWithoutCollaborationsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCollaborationsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutCollaborationsInput;
}
