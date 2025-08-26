import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateWithoutCollectionInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateOrConnectWithoutCollectionInput", {})
export class CollectionCollaboratorCreateOrConnectWithoutCollectionInput {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateWithoutCollectionInput, {
    nullable: false
  })
  create!: CollectionCollaboratorCreateWithoutCollectionInput;
}
