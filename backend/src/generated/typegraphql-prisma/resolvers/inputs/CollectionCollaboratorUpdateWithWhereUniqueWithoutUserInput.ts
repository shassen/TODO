import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorUpdateWithoutUserInput } from "../inputs/CollectionCollaboratorUpdateWithoutUserInput";
import { CollectionCollaboratorWhereUniqueInput } from "../inputs/CollectionCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput", {})
export class CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CollectionCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CollectionCollaboratorUpdateWithoutUserInput;
}
