import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutTodosInput } from "../inputs/CollectionCreateWithoutTodosInput";
import { CollectionUpdateWithoutTodosInput } from "../inputs/CollectionUpdateWithoutTodosInput";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionUpsertWithoutTodosInput", {})
export class CollectionUpsertWithoutTodosInput {
  @TypeGraphQL.Field(_type => CollectionUpdateWithoutTodosInput, {
    nullable: false
  })
  update!: CollectionUpdateWithoutTodosInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutTodosInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutTodosInput;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;
}
