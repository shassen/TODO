import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutOwnerInput } from "../inputs/CollectionCreateWithoutOwnerInput";
import { CollectionUpdateWithoutOwnerInput } from "../inputs/CollectionUpdateWithoutOwnerInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpsertWithWhereUniqueWithoutOwnerInput", {})
export class CollectionUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: CollectionUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutOwnerInput;
}
