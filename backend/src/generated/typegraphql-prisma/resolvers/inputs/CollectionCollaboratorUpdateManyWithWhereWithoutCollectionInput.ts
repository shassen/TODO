import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorScalarWhereInput } from "../inputs/CollectionCollaboratorScalarWhereInput";
import { CollectionCollaboratorUpdateManyMutationInput } from "../inputs/CollectionCollaboratorUpdateManyMutationInput";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput", {})
export class CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput {
  @TypeGraphQL.Field(_type => CollectionCollaboratorScalarWhereInput, {
    nullable: false
  })
  where!: CollectionCollaboratorScalarWhereInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CollectionCollaboratorUpdateManyMutationInput;
}
