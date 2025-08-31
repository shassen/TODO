import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "node",
          root: "./src/services",
          environment: "node",
          dependencies: ["node"],
          testMatch: ["**/*.test.ts"],
        },
      },
    ],
  },
})
