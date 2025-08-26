import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";

@TypeGraphQL.ObjectType("AggregateTodo", {})
export class AggregateTodo {
  @TypeGraphQL.Field(_type => TodoCountAggregate, {
    nullable: true
  })
  _count!: TodoCountAggregate | null;

  @TypeGraphQL.Field(_type => TodoMinAggregate, {
    nullable: true
  })
  _min!: TodoMinAggregate | null;

  @TypeGraphQL.Field(_type => TodoMaxAggregate, {
    nullable: true
  })
  _max!: TodoMaxAggregate | null;
}
