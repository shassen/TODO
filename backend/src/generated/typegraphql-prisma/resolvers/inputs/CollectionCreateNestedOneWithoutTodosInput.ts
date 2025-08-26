import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateOrConnectWithoutTodosInput } from "../inputs/CollectionCreateOrConnectWithoutTodosInput";
import { CollectionCreateWithoutTodosInput } from "../inputs/CollectionCreateWithoutTodosInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateNestedOneWithoutTodosInput", {})
export class CollectionCreateNestedOneWithoutTodosInput {
  @TypeGraphQL.Field(_type => CollectionCreateWithoutTodosInput, {
    nullable: true
  })
  create?: CollectionCreateWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateOrConnectWithoutTodosInput, {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput | undefined;
}
