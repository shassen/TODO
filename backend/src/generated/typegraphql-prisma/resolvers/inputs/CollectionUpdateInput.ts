import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorUpdateManyWithoutCollectionNestedInput } from "../inputs/CollectionCollaboratorUpdateManyWithoutCollectionNestedInput";
import { TodoUpdateManyWithoutCollectionNestedInput } from "../inputs/TodoUpdateManyWithoutCollectionNestedInput";
import { UserUpdateOneRequiredWithoutCollectionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCollectionsNestedInput";

@TypeGraphQL.InputType("CollectionUpdateInput", {})
export class CollectionUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCollectionsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutCollectionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateManyWithoutCollectionNestedInput, {
    nullable: true
  })
  collaborators?: CollectionCollaboratorUpdateManyWithoutCollectionNestedInput | undefined;

  @TypeGraphQL.Field(_type => TodoUpdateManyWithoutCollectionNestedInput, {
    nullable: true
  })
  todos?: TodoUpdateManyWithoutCollectionNestedInput | undefined;
}
