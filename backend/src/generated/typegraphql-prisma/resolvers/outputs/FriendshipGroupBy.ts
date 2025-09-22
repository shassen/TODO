import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCountAggregate } from "../outputs/FriendshipCountAggregate";
import { FriendshipMaxAggregate } from "../outputs/FriendshipMaxAggregate";
import { FriendshipMinAggregate } from "../outputs/FriendshipMinAggregate";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.ObjectType("FriendshipGroupBy", {})
export class FriendshipGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  friendId!: string;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: false
  })
  status!: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED" | "UNFRIENDED";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isDeleted!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

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
