import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CollectionCreateManyOwnerInput } from "../inputs/CollectionCreateManyOwnerInput";

@TypeGraphQL.InputType("CollectionCreateManyOwnerInputEnvelope", {})
export class CollectionCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [CollectionCreateManyOwnerInput], {
    nullable: false
  })
  data!: CollectionCreateManyOwnerInput[];
}
