import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateWithoutTodosInput } from "../inputs/CollectionUpdateWithoutTodosInput";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionUpdateToOneWithWhereWithoutTodosInput", {})
export class CollectionUpdateToOneWithWhereWithoutTodosInput {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutTodosInput, {
    nullable: false
  })
  data!: CollectionUpdateWithoutTodosInput;
}
