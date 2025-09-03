import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          environment: "node",
          setupFiles: ["./src/mocks.ts"],
        },
      },
    ],
  },
})
