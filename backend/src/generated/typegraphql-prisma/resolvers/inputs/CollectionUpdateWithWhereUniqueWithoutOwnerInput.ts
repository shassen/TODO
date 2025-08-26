import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateWithoutOwnerInput } from "../inputs/CollectionUpdateWithoutOwnerInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateWithWhereUniqueWithoutOwnerInput", {})
export class CollectionUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: CollectionUpdateWithoutOwnerInput;
}
