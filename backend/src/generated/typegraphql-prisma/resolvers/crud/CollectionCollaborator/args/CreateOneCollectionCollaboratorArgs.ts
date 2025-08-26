import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorCreateInput } from "../../../inputs/CollectionCollaboratorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateInput, {
    nullable: false
  })
  data!: CollectionCollaboratorCreateInput;
}
