import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { FriendStatus } from "../enums/FriendStatus";

@TypeGraphQL.ObjectType("Friendship", {})
export class Friendship {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  friendId!: string;

  friend?: User;

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
  deletedAt?: Date | null;
}
