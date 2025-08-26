import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorUpdateWithoutCollectionInput } from "../inputs/CollectionCollaboratorUpdateWithoutCollectionInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput", {})
export class CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateWithoutCollectionInput, {
    nullable: false
  })
  data!: CollectionCollaboratorUpdateWithoutCollectionInput;
}
