import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorUpdateInput } from "../../../inputs/CollectionCollaboratorUpdateInput";
import { CollectionCollaboratorWhereUniqueInput } from "../../../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateInput, {
    nullable: false
  })
  data!: CollectionCollaboratorUpdateInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;
}
