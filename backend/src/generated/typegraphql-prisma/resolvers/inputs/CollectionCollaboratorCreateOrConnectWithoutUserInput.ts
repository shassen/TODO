import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateWithoutUserInput } from "../inputs/CollectionCollaboratorCreateWithoutUserInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorCreateOrConnectWithoutUserInput", {})
export class CollectionCollaboratorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateWithoutUserInput, {
    nullable: false
  })
  create!: CollectionCollaboratorCreateWithoutUserInput;
}
