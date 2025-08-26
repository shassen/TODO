import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateWithoutCollectionInput } from "../inputs/TodoCreateWithoutCollectionInput";
import { TodoUpdateWithoutCollectionInput } from "../inputs/TodoUpdateWithoutCollectionInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpsertWithWhereUniqueWithoutCollectionInput", {})
export class TodoUpsertWithWhereUniqueWithoutCollectionInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoUpdateWithoutCollectionInput, {
    nullable: false
  })
  update!: TodoUpdateWithoutCollectionInput;

  @TypeGraphQL.Field(_type => TodoCreateWithoutCollectionInput, {
    nullable: false
  })
  create!: TodoCreateWithoutCollectionInput;
}
