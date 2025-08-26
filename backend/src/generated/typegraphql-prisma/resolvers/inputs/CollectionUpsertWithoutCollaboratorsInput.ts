import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutCollaboratorsInput } from "../inputs/CollectionCreateWithoutCollaboratorsInput";
import { CollectionUpdateWithoutCollaboratorsInput } from "../inputs/CollectionUpdateWithoutCollaboratorsInput";
import { CollectionWhereInput } from "../inputs/CollectionWhereInput";

@TypeGraphQL.InputType("CollectionUpsertWithoutCollaboratorsInput", {})
export class CollectionUpsertWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => CollectionUpdateWithoutCollaboratorsInput, {
    nullable: false
  })
  update!: CollectionUpdateWithoutCollaboratorsInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutCollaboratorsInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutCollaboratorsInput;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;
}
