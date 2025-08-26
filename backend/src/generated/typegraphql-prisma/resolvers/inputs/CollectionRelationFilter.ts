import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionRelationFilter", {})
export class CollectionRelationFilter {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  is?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  isNot?: CollectionWhereInput | undefined;
}
