import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { TodoCustomResolver } from "./TodoCustomResolver"
import { UserCustomResolver } from "./UserCustomResolver"
import { CollectionCustomResolver } from "./CollectionCustomResolver"

export const createSchema = async (emitSchemaFile: boolean | string) => {
  return await buildSchema({
    resolvers: [TodoCustomResolver, UserCustomResolver, CollectionCustomResolver],
    emitSchemaFile,
  })
}
