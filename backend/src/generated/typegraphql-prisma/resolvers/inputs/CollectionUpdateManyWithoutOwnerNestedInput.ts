import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyOwnerInputEnvelope } from "../inputs/CollectionCreateManyOwnerInputEnvelope";
import { CollectionCreateOrConnectWithoutOwnerInput } from "../inputs/CollectionCreateOrConnectWithoutOwnerInput";
import { CollectionCreateWithoutOwnerInput } from "../inputs/CollectionCreateWithoutOwnerInput";
import { CollectionScalarWhereInput } from "../inputs/CollectionScalarWhereInput";
import { CollectionUpdateManyWithWhereWithoutOwnerInput } from "../inputs/CollectionUpdateManyWithWhereWithoutOwnerInput";
import { CollectionUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CollectionUpdateWithWhereUniqueWithoutOwnerInput";
import { CollectionUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CollectionUpsertWithWhereUniqueWithoutOwnerInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateManyWithoutOwnerNestedInput", {})
export class CollectionUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [CollectionCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CollectionCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: CollectionUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: CollectionCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  set?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  delete?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: CollectionUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: CollectionUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CollectionScalarWhereInput[] | undefined;
}
