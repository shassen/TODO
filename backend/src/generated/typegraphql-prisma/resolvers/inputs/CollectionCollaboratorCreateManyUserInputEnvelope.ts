import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyUserInput } from "../inputs/CollectionCollaboratorCreateManyUserInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateManyUserInputEnvelope", {})
export class CollectionCollaboratorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateManyUserInput], {
    nullable: false
  })
  data!: CollectionCollaboratorCreateManyUserInput[];
}
