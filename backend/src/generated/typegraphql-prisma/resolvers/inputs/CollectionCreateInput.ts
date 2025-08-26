import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateNestedManyWithoutCollectionInput } from "../inputs/CollectionCollaboratorCreateNestedManyWithoutCollectionInput";
import { TodoCreateNestedManyWithoutCollectionInput } from "../inputs/TodoCreateNestedManyWithoutCollectionInput";
import { UserCreateNestedOneWithoutCollectionsInput } from "../inputs/UserCreateNestedOneWithoutCollectionsInput";

@TypeGraphQL.InputType("CollectionCreateInput", {})
export class CollectionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isArchived?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCollectionsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateNestedManyWithoutCollectionInput, {
    nullable: true
  })
  collaborators?: CollectionCollaboratorCreateNestedManyWithoutCollectionInput | undefined;

  @TypeGraphQL.Field(_type => TodoCreateNestedManyWithoutCollectionInput, {
    nullable: true
  })
  todos?: TodoCreateNestedManyWithoutCollectionInput | undefined;
}
