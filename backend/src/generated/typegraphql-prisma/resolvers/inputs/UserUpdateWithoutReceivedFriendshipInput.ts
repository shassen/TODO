import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorUpdateManyWithoutUserNestedInput } from "../inputs/CollectionCollaboratorUpdateManyWithoutUserNestedInput";
import { CollectionUpdateManyWithoutOwnerNestedInput } from "../inputs/CollectionUpdateManyWithoutOwnerNestedInput";
import { FriendshipUpdateManyWithoutUserNestedInput } from "../inputs/FriendshipUpdateManyWithoutUserNestedInput";
import { TodoUpdateManyWithoutCreatorNestedInput } from "../inputs/TodoUpdateManyWithoutCreatorNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutReceivedFriendshipInput", {})
export class UserUpdateWithoutReceivedFriendshipInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  birthday?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  collections?: CollectionUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  collaborations?: CollectionCollaboratorUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => TodoUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  todos?: TodoUpdateManyWithoutCreatorNestedInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  initiatedFriendship?: FriendshipUpdateManyWithoutUserNestedInput | undefined;
}
