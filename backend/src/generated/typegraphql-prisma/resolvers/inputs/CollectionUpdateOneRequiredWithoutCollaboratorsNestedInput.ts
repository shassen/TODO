import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateOrConnectWithoutCollaboratorsInput } from "../inputs/CollectionCreateOrConnectWithoutCollaboratorsInput";
import { CollectionCreateWithoutCollaboratorsInput } from "../inputs/CollectionCreateWithoutCollaboratorsInput";
import { CollectionUpdateToOneWithWhereWithoutCollaboratorsInput } from "../inputs/CollectionUpdateToOneWithWhereWithoutCollaboratorsInput";
import { CollectionUpsertWithoutCollaboratorsInput } from "../inputs/CollectionUpsertWithoutCollaboratorsInput";
import { CollectionWhereUniqueInput } from "../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.InputType("CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput", {})
export class CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput {
  @TypeGraphQL.Field(_type => CollectionCreateWithoutCollaboratorsInput, {
    nullable: true
  })
  create?: CollectionCreateWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => CollectionCreateOrConnectWithoutCollaboratorsInput, {
    nullable: true
  })
  connectOrCreate?: CollectionCreateOrConnectWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpsertWithoutCollaboratorsInput, {
    nullable: true
  })
  upsert?: CollectionUpsertWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: true
  })
  connect?: CollectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateToOneWithWhereWithoutCollaboratorsInput, {
    nullable: true
  })
  update?: CollectionUpdateToOneWithWhereWithoutCollaboratorsInput | undefined;
}
