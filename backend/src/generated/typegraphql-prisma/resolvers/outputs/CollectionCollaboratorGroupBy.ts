import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCountAggregate } from "../outputs/CollectionCollaboratorCountAggregate";
import { CollectionCollaboratorMaxAggregate } from "../outputs/CollectionCollaboratorMaxAggregate";
import { CollectionCollaboratorMinAggregate } from "../outputs/CollectionCollaboratorMinAggregate";
import { Permission } from "../../enums/Permission";

@TypeGraphQL.ObjectType("CollectionCollaboratorGroupBy", {})
export class CollectionCollaboratorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Permission, {
    nullable: false
  })
  permission!: "COMPLETE" | "VIEW" | "EDIT" | "OWNER";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collectionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCountAggregate, {
    nullable: true
  })
  _count!: CollectionCollaboratorCountAggregate | null;

  @TypeGraphQL.Field(_type => CollectionCollaboratorMinAggregate, {
    nullable: true
  })
  _min!: CollectionCollaboratorMinAggregate | null;

  @TypeGraphQL.Field(_type => CollectionCollaboratorMaxAggregate, {
    nullable: true
  })
  _max!: CollectionCollaboratorMaxAggregate | null;
}
