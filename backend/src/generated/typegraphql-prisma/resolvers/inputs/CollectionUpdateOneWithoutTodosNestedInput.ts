import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateOrConnectWithoutTodosInput } from "../inputs/CollectionCreateOrConnectWithoutTodosInput";
import { CollectionCreateWithoutTodosInput } from "../inputs/CollectionCreateWithoutTodosInput";
import { CollectionUpdateToOneWithWhereWithoutTodosInput } from "../inputs/CollectionUpdateToOneWithWhereWithoutTodosInput";
import { CollectionUpsertWithoutTodosInput } from "../inputs/CollectionUpsertWithoutTodosInput";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateOneWithoutTodosNestedInput", {})
export class CollectionUpdateOneWithoutTodosNestedInput {
  @TypeGraphQL.Field(_type => CollectionCreateWithoutTodosInput, {
    nullable: true
  })
  create?: CollectionCreateWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateOrConnectWithoutTodosInput, {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpsertWithoutTodosInput, {
    nullable: true
  })
  upsert?: CollectionUpsertWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  delete?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateToOneWithWhereWithoutTodosInput, {
    nullable: true
  })
  update?: CollectionUpdateToOneWithWhereWithoutTodosInput | undefined;
}
