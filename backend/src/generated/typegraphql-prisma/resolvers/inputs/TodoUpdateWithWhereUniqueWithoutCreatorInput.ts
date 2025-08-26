import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoUpdateWithoutCreatorInput } from "../inputs/TodoUpdateWithoutCreatorInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateWithWhereUniqueWithoutCreatorInput", {})
export class TodoUpdateWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: TodoUpdateWithoutCreatorInput;
}
