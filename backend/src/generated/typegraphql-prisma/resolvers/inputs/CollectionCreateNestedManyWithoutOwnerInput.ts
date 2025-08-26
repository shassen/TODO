import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyOwnerInputEnvelope } from "../inputs/CollectionCreateManyOwnerInputEnvelope";
import { CollectionCreateOrConnectWithoutOwnerInput } from "../inputs/CollectionCreateOrConnectWithoutOwnerInput";
import { CollectionCreateWithoutOwnerInput } from "../inputs/CollectionCreateWithoutOwnerInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionCreateNestedManyWithoutOwnerInput", {})
export class CollectionCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;
}
