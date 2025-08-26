import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyCreatorInputEnvelope } from "../inputs/TodoCreateManyCreatorInputEnvelope";
import { TodoCreateOrConnectWithoutCreatorInput } from "../inputs/TodoCreateOrConnectWithoutCreatorInput";
import { TodoCreateWithoutCreatorInput } from "../inputs/TodoCreateWithoutCreatorInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoCreateNestedManyWithoutCreatorInput", {})
export class TodoCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TodoCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  connect?: TodoWhereUniqueInput[] | undefined;
}
