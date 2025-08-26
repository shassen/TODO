import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyCollectionInputEnvelope } from "../inputs/CollectionCollaboratorCreateManyCollectionInputEnvelope";
import { CollectionCollaboratorCreateOrConnectWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateOrConnectWithoutCollectionInput";
import { CollectionCollaboratorCreateWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateWithoutCollectionInput";
import { CollectionCollaboratorScalarWhereInput } from "../inputs/CollectionCollaboratorScalarWhereInput";
import { CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput } from "../inputs/CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput";
import { CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput } from "../inputs/CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput";
import { CollectionCollaboratorUpsertWithWhereUniqueWithoutCollectionInput } from "../inputs/CollectionCollaboratorUpsertWithWhereUniqueWithoutCollectionInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateManyWithoutCollectionNestedInput", {})
export class CollectionCollaboratorUpdateManyWithoutCollectionNestedInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: CollectionCollaboratorCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCollaboratorCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpsertWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  upsert?: CollectionCollaboratorUpsertWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCollaboratorCreateManyCollectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  set?: CollectionCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CollectionCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  delete?: CollectionCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  update?: CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput], {
    nullable: true
  })
  updateMany?: CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CollectionCollaboratorScalarWhereInput[] | undefined;
}
