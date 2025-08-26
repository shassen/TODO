import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorWhereUniqueInput } from "../../../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCollectionCollaboratorOrThrowArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;
}
