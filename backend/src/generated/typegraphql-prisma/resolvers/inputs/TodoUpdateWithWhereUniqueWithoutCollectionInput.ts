import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoUpdateWithoutCollectionInput } from "../inputs/TodoUpdateWithoutCollectionInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateWithWhereUniqueWithoutCollectionInput", {})
export class TodoUpdateWithWhereUniqueWithoutCollectionInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoUpdateWithoutCollectionInput, {
    nullable: false
  })
  data!: TodoUpdateWithoutCollectionInput;
}
