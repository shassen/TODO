import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyCollectionInputEnvelope } from "../inputs/TodoCreateManyCollectionInputEnvelope";
import { TodoCreateOrConnectWithoutCollectionInput } from "../inputs/TodoCreateOrConnectWithoutCollectionInput";
import { TodoCreateWithoutCollectionInput } from "../inputs/TodoCreateWithoutCollectionInput";
import { TodoScalarWhereInput } from "../inputs/TodoScalarWhereInput";
import { TodoUpdateManyWithWhereWithoutCollectionInput } from "../inputs/TodoUpdateManyWithWhereWithoutCollectionInput";
import { TodoUpdateWithWhereUniqueWithoutCollectionInput } from "../inputs/TodoUpdateWithWhereUniqueWithoutCollectionInput";
import { TodoUpsertWithWhereUniqueWithoutCollectionInput } from "../inputs/TodoUpsertWithWhereUniqueWithoutCollectionInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateManyWithoutCollectionNestedInput", {})
export class TodoUpdateManyWithoutCollectionNestedInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: TodoCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpsertWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  upsert?: TodoUpsertWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyCollectionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TodoUpdateWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  update?: TodoUpdateWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpdateManyWithWhereWithoutCollectionInput], {
    nullable: true
  })
  updateMany?: TodoUpdateManyWithWhereWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TodoScalarWhereInput[] | undefined;
}
