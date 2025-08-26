import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyCreatorInput } from "../inputs/TodoCreateManyCreatorInput";

@TypeGraphQL.InputType("TodoCreateManyCreatorInputEnvelope", {})
export class TodoCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [TodoCreateManyCreatorInput], {
    nullable: false
  })
  data!: TodoCreateManyCreatorInput[];
}
