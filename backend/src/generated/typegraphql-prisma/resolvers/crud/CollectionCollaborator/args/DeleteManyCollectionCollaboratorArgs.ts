import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorWhereInput } from "../../../inputs/CollectionCollaboratorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  where?: CollectionCollaboratorWhereInput | undefined;
}
