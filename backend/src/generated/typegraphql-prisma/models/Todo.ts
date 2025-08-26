import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Collection } from "../models/Collection";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Todo", {})
export class Todo {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  content?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  completed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isDeleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isArchived!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate?: Date | null;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  archivedAt?: Date | null;

  collection?: Collection;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collectionId!: string;

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;
}
