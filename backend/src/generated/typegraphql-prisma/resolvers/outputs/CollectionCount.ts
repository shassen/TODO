import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCountCollaboratorsArgs } from "./args/CollectionCountCollaboratorsArgs";
import { CollectionCountTodosArgs } from "./args/CollectionCountTodosArgs";

@TypeGraphQL.ObjectType("CollectionCount", {})
export class CollectionCount {
  collaborators!: number;
  todos!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collaborators",
    nullable: false
  })
  getCollaborators(@TypeGraphQL.Root() root: CollectionCount, @TypeGraphQL.Args() args: CollectionCountCollaboratorsArgs): number {
    return root.collaborators;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "todos",
    nullable: false
  })
  getTodos(@TypeGraphQL.Root() root: CollectionCount, @TypeGraphQL.Args() args: CollectionCountTodosArgs): number {
    return root.todos;
  }
}
