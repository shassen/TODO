import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCountAggregate } from "../outputs/FriendshipCountAggregate";
import { FriendshipMaxAggregate } from "../outputs/FriendshipMaxAggregate";
import { FriendshipMinAggregate } from "../outputs/FriendshipMinAggregate";

@TypeGraphQL.ObjectType("AggregateFriendship", {})
export class AggregateFriendship {
  @TypeGraphQL.Field(_type => FriendshipCountAggregate, {
    nullable: true
  })
  _count!: FriendshipCountAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipMinAggregate, {
    nullable: true
  })
  _min!: FriendshipMinAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipMaxAggregate, {
    nullable: true
  })
  _max!: FriendshipMaxAggregate | null;
}
