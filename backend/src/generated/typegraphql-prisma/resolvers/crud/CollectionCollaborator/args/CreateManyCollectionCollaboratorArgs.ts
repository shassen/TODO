import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorCreateManyInput } from "../../../inputs/CollectionCollaboratorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateManyInput], {
    nullable: false
  })
  data!: CollectionCollaboratorCreateManyInput[];
}
