import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateNestedOneWithoutTodosInput } from "../inputs/CollectionCreateNestedOneWithoutTodosInput";

@TypeGraphQL.InputType("TodoCreateWithoutCreatorInput", {})
export class TodoCreateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  content?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  completed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isArchived?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateNestedOneWithoutTodosInput, {
    nullable: true
  })
  collection?: CollectionCreateNestedOneWithoutTodosInput | undefined;
}
