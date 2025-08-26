import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorUpdateManyMutationInput } from "../../../inputs/CollectionCollaboratorUpdateManyMutationInput";
import { CollectionCollaboratorWhereInput } from "../../../inputs/CollectionCollaboratorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CollectionCollaboratorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  where?: CollectionCollaboratorWhereInput | undefined;
}
