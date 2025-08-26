import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorWhereUniqueInput } from "../../../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;
}
