import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorCreateInput } from "../../../inputs/CollectionCollaboratorCreateInput";
import { CollectionCollaboratorUpdateInput } from "../../../inputs/CollectionCollaboratorUpdateInput";
import { CollectionCollaboratorWhereUniqueInput } from "../../../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateInput, {
    nullable: false
  })
  create!: CollectionCollaboratorCreateInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateInput, {
    nullable: false
  })
  update!: CollectionCollaboratorUpdateInput;
}
