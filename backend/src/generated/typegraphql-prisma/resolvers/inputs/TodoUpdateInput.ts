import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionUpdateOneWithoutTodosNestedInput } from "../inputs/CollectionUpdateOneWithoutTodosNestedInput";
import { UserUpdateOneRequiredWithoutTodosNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTodosNestedInput";

@TypeGraphQL.InputType("TodoUpdateInput", {})
export class TodoUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

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

  @TypeGraphQL.Field(_type => CollectionUpdateOneWithoutTodosNestedInput, {
    nullable: true
  })
  collection?: CollectionUpdateOneWithoutTodosNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTodosNestedInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutTodosNestedInput | undefined;
}
