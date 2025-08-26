import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateWithoutCollaboratorsInput } from "../inputs/CollectionCreateWithoutCollaboratorsInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateOrConnectWithoutCollaboratorsInput", {})
export class CollectionCreateOrConnectWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCreateWithoutCollaboratorsInput, {
    nullable: false
  })
  create!: CollectionCreateWithoutCollaboratorsInput;
}
