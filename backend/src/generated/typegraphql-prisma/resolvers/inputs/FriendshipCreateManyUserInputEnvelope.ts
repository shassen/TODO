import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyUserInput } from "../inputs/FriendshipCreateManyUserInput";

@TypeGraphQL.InputType("FriendshipCreateManyUserInputEnvelope", {})
export class FriendshipCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyUserInput], {
    nullable: false
  })
  data!: FriendshipCreateManyUserInput[];
}
