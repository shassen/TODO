import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutTodosInput } from "../inputs/CollectionCreateWithoutTodosInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateOrConnectWithoutTodosInput", {})
export class CollectionCreateOrConnectWithoutTodosInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutTodosInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutTodosInput;
}
