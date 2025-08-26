import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Collection } from "../models/Collection";
import { User } from "../models/User";
import { Permission } from "../enums/Permission";

@TypeGraphQL.ObjectType("CollectionCollaborator", {})
export class CollectionCollaborator {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Permission, {
    nullable: false
  })
  permission!: "COMPLETE" | "VIEW" | "EDIT" | "OWNER";

  collection?: Collection;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collectionId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
