import { describe, it, expect } from "vitest"

describe("todoService test suite", () => {
  it("Simple boolean check should pass test as truthy", () => {
    const testBoolean = true
    expect(testBoolean).toBeTruthy()
  })

  it("Simple boolean check should pass test as falsy", () => {
    const testBoolean = false
    expect(testBoolean).toBeFalsy()
  })
})
