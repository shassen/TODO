import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateWithoutCreatorInput } from "../inputs/TodoCreateWithoutCreatorInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoCreateOrConnectWithoutCreatorInput", {})
export class TodoCreateOrConnectWithoutCreatorInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: TodoCreateWithoutCreatorInput;
}
