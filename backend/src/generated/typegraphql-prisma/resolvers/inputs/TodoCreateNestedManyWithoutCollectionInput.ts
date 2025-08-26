import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyCollectionInputEnvelope } from "../inputs/TodoCreateManyCollectionInputEnvelope";
import { TodoCreateOrConnectWithoutCollectionInput } from "../inputs/TodoCreateOrConnectWithoutCollectionInput";
import { TodoCreateWithoutCollectionInput } from "../inputs/TodoCreateWithoutCollectionInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoCreateNestedManyWithoutCollectionInput", {})
export class TodoCreateNestedManyWithoutCollectionInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: TodoCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyCollectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  connect?: TodoWhereUniqueInput[] | undefined;
}
