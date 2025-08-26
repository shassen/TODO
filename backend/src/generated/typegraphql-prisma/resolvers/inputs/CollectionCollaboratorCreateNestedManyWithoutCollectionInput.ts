import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyCollectionInputEnvelope } from "../inputs/CollectionCollaboratorCreateManyCollectionInputEnvelope";
import { CollectionCollaboratorCreateOrConnectWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateOrConnectWithoutCollectionInput";
import { CollectionCollaboratorCreateWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateWithoutCollectionInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateNestedManyWithoutCollectionInput", {})
export class CollectionCollaboratorCreateNestedManyWithoutCollectionInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: CollectionCollaboratorCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCollaboratorCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCollaboratorCreateManyCollectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionCollaboratorWhereUniqueInput[] | undefined;
}
