import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCountAggregate } from "../outputs/CollectionCountAggregate";
import { CollectionMaxAggregate } from "../outputs/CollectionMaxAggregate";
import { CollectionMinAggregate } from "../outputs/CollectionMinAggregate";

@TypeGraphQL.ObjectType("AggregateCollection", {})
export class AggregateCollection {
  @TypeGraphQL.Field(_type => CollectionCountAggregate, {
    nullable: true
  })
  _count!: CollectionCountAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMinAggregate, {
    nullable: true
  })
  _min!: CollectionMinAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMaxAggregate, {
    nullable: true
  })
  _max!: CollectionMaxAggregate | null;
}
