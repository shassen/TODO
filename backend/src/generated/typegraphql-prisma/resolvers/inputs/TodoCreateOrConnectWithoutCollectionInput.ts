import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateWithoutCollectionInput } from "../inputs/TodoCreateWithoutCollectionInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoCreateOrConnectWithoutCollectionInput", {})
export class TodoCreateOrConnectWithoutCollectionInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoCreateWithoutCollectionInput, {
    nullable: false
  })
  create!: TodoCreateWithoutCollectionInput;
}
