import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateManyUserInputEnvelope } from "../inputs/CollectionCollaboratorCreateManyUserInputEnvelope";
import { CollectionCollaboratorCreateOrConnectWithoutUserInput } from "../inputs/CollectionCollaboratorCreateOrConnectWithoutUserInput";
import { CollectionCollaboratorCreateWithoutUserInput } from "../inputs/CollectionCollaboratorCreateWithoutUserInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateNestedManyWithoutUserInput", {})
export class CollectionCollaboratorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateWithoutUserInput], {
    nullable: true
  })
  create?: CollectionCollaboratorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCollaboratorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCollaboratorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionCollaboratorWhereUniqueInput[] | undefined;
}
