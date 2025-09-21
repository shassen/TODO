import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCollaboratorCreateNestedManyWithoutUserInput } from "../inputs/CollectionCollaboratorCreateNestedManyWithoutUserInput";
import { CollectionCreateNestedManyWithoutOwnerInput } from "../inputs/CollectionCreateNestedManyWithoutOwnerInput";
import { FriendshipCreateNestedManyWithoutFriendInput } from "../inputs/FriendshipCreateNestedManyWithoutFriendInput";
import { FriendshipCreateNestedManyWithoutUserInput } from "../inputs/FriendshipCreateNestedManyWithoutUserInput";
import { TodoCreateNestedManyWithoutCreatorInput } from "../inputs/TodoCreateNestedManyWithoutCreatorInput";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

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

  @TypeGraphQL.Field(_type => CollectionCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  collections?: CollectionCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCollaboratorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  collaborations?: CollectionCollaboratorCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TodoCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  todos?: TodoCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  initiatedFriendship?: FriendshipCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutFriendInput, {
    nullable: true
  })
  receivedFriendship?: FriendshipCreateNestedManyWithoutFriendInput | undefined;
}
