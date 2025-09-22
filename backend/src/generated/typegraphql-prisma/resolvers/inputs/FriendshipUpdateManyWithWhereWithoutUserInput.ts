import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyMutationInput } from "../inputs/FriendshipUpdateManyMutationInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithWhereWithoutUserInput", {})
export class FriendshipUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => FriendshipScalarWhereInput, {
    nullable: false
  })
  where!: FriendshipScalarWhereInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyMutationInput, {
    nullable: false
  })
  data!: FriendshipUpdateManyMutationInput;
}
