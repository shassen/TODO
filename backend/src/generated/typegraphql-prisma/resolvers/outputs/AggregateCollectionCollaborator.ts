import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCountAggregate } from "../outputs/CollectionCollaboratorCountAggregate";
import { CollectionCollaboratorMaxAggregate } from "../outputs/CollectionCollaboratorMaxAggregate";
import { CollectionCollaboratorMinAggregate } from "../outputs/CollectionCollaboratorMinAggregate";

@TypeGraphQL.ObjectType("AggregateCollectionCollaborator", {})
export class AggregateCollectionCollaborator {
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
