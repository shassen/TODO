import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyCollectionInput } from "../inputs/CollectionCollaboratorCreateManyCollectionInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateManyCollectionInputEnvelope", {})
export class CollectionCollaboratorCreateManyCollectionInputEnvelope {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateManyCollectionInput], {
    nullable: false
  })
  data!: CollectionCollaboratorCreateManyCollectionInput[];
}
