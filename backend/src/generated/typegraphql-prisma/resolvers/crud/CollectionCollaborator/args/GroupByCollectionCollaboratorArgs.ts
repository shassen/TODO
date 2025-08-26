import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCollaboratorOrderByWithAggregationInput } from "../../../inputs/CollectionCollaboratorOrderByWithAggregationInput";
import { CollectionCollaboratorScalarWhereWithAggregatesInput } from "../../../inputs/CollectionCollaboratorScalarWhereWithAggregatesInput";
import { CollectionCollaboratorWhereInput } from "../../../inputs/CollectionCollaboratorWhereInput";
import { CollectionCollaboratorScalarFieldEnum } from "../../../../enums/CollectionCollaboratorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCollectionCollaboratorArgs {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereInput, {
    nullable: true
  })
  where?: CollectionCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CollectionCollaboratorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "permission" | "collectionId" | "userId">;

  @TypeGraphQL.Field(_type => CollectionCollaboratorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CollectionCollaboratorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
