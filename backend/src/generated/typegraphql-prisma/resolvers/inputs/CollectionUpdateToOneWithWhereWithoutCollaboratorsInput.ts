import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateWithoutCollaboratorsInput } from "../inputs/CollectionUpdateWithoutCollaboratorsInput";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionUpdateToOneWithWhereWithoutCollaboratorsInput", {})
export class CollectionUpdateToOneWithWhereWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateWithoutCollaboratorsInput, {
    nullable: false
  })
  data!: CollectionUpdateWithoutCollaboratorsInput;
}
