import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { CollectionCollaborator } from "../models/CollectionCollaborator";
import { Todo } from "../models/Todo";
import { User } from "../models/User";
import { CollectionCount } from "../resolvers/outputs/CollectionCount";

@TypeGraphQL.ObjectType("Collection", {})
export class Collection {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isDeleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isArchived!: boolean;

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

  owner?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  collaborators?: CollectionCollaborator[];

  todos?: Todo[];

  @TypeGraphQL.Field(_type => CollectionCount, {
    nullable: true
  })
  _count?: CollectionCount | null;
}
