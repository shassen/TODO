import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { TodoCustomResolver } from "./graphql/TodoCustomResolver"
import { UserCustomResolver } from "./graphql/UserCustomResolver"
import { CollectionCustomResolver } from "./graphql/CollectionCustomResolver"

const schema = buildSchema({
  resolvers: [TodoCustomResolver, UserCustomResolver, CollectionCustomResolver],
  emitSchemaFile: "src/schema.graphql",
})
