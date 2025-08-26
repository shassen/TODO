import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.ObjectType("CollectionCollaboratorMinAggregate", {})
export class CollectionCollaboratorMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Permission, {
    nullable: true
  })
  permission!: "COMPLETE" | "VIEW" | "EDIT" | "OWNER" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  collectionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
