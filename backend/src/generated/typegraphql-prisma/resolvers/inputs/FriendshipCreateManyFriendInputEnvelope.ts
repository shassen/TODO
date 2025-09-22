import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFriendInput } from "../inputs/FriendshipCreateManyFriendInput";

@TypeGraphQL.InputType("FriendshipCreateManyFriendInputEnvelope", {})
export class FriendshipCreateManyFriendInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyFriendInput], {
    nullable: false
  })
  data!: FriendshipCreateManyFriendInput[];
}
