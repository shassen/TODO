import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipCreateManyInput } from "../../../inputs/FriendshipCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFriendshipArgs {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyInput], {
    nullable: false
  })
  data!: FriendshipCreateManyInput[];
}
