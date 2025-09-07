import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "../backend/schema.graphql", // Use local schema file instead of server
  documents: "src/**/*.{ts,tsx}", // Look for GraphQL operations in TypeScript files
  generates: {
    "src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
  },
}

export default config
