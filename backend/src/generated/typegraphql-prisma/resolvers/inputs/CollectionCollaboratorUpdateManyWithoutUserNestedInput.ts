import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyUserInputEnvelope } from "../inputs/CollectionCollaboratorCreateManyUserInputEnvelope";
import { CollectionCollaboratorCreateOrConnectWithoutUserInput } from "../inputs/CollectionCollaboratorCreateOrConnectWithoutUserInput";
import { CollectionCollaboratorCreateWithoutUserInput } from "../inputs/CollectionCollaboratorCreateWithoutUserInput";
import { CollectionCollaboratorScalarWhereInput } from "../inputs/CollectionCollaboratorScalarWhereInput";
import { CollectionCollaboratorUpdateManyWithWhereWithoutUserInput } from "../inputs/CollectionCollaboratorUpdateManyWithWhereWithoutUserInput";
import { CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput";
import { CollectionCollaboratorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CollectionCollaboratorUpsertWithWhereUniqueWithoutUserInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateManyWithoutUserNestedInput", {})
export class CollectionCollaboratorUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateWithoutUserInput], {
    nullable: true
  })
  create?: CollectionCollaboratorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCollaboratorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CollectionCollaboratorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCollaboratorCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CollectionCollaboratorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CollectionCollaboratorScalarWhereInput[] | undefined;
}
