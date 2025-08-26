import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyCreatorInputEnvelope } from "../inputs/TodoCreateManyCreatorInputEnvelope";
import { TodoCreateOrConnectWithoutCreatorInput } from "../inputs/TodoCreateOrConnectWithoutCreatorInput";
import { TodoCreateWithoutCreatorInput } from "../inputs/TodoCreateWithoutCreatorInput";
import { TodoScalarWhereInput } from "../inputs/TodoScalarWhereInput";
import { TodoUpdateManyWithWhereWithoutCreatorInput } from "../inputs/TodoUpdateManyWithWhereWithoutCreatorInput";
import { TodoUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/TodoUpdateWithWhereUniqueWithoutCreatorInput";
import { TodoUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/TodoUpsertWithWhereUniqueWithoutCreatorInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateManyWithoutCreatorNestedInput", {})
export class TodoUpdateManyWithoutCreatorNestedInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TodoCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: TodoUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  set?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  delete?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  connect?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: TodoUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: TodoUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TodoScalarWhereInput[] | undefined;
}
