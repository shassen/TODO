import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { TodoCustomResolver } from "./graphql/todo"
import { UserCustomResolver } from "./graphql/UserCustomResolver"

const schema = buildSchema({
  resolvers: [TodoCustomResolver, UserCustomResolver],
  emitSchemaFile: "src/schema.graphql",
})
