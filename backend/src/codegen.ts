import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { TodoCustomResolver } from "./graphql/TodoCustomResolver"
import { UserCustomResolver } from "./graphql/UserCustomResolver"

const schema = buildSchema({
  resolvers: [TodoCustomResolver, UserCustomResolver],
  emitSchemaFile: "src/schema.graphql",
})
