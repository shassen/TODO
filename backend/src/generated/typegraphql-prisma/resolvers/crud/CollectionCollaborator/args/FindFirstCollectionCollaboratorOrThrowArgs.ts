import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorOrderByWithRelationInput } from "../../../inputs/CollectionCollaboratorOrderByWithRelationInput";
import { CollectionCollaboratorWhereInput } from "../../../inputs/CollectionCollaboratorWhereInput";
import { CollectionCollaboratorWhereUniqueInput } from "../../../inputs/CollectionCollaboratorWhereUniqueInput";
import { CollectionCollaboratorScalarFieldEnum } from "../../../../enums/CollectionCollaboratorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCollectionCollaboratorOrThrowArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  where?: CollectionCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CollectionCollaboratorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: true
  })
  cursor?: CollectionCollaboratorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "permission" | "collectionId" | "userId"> | undefined;
}
