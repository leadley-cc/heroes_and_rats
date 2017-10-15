const assert = require("assert")
const Food = require("../food")

describe("Food", () => {
  var cheese

  beforeEach(() => {
    cheese = new Food("cheese", 6)
  })

  it("should have a name", () => {
    assert.strictEqual(cheese.name, "cheese")
  })

  it("should have a replenishment value", () => {
    assert.strictEqual(cheese.replenishment, 6)
  })

  it("should start untouched", () => {
    assert.strictEqual(cheese.touched, false)
  })

  it("should be able to be touched", () => {
    cheese.touch()
    assert.strictEqual(cheese.touched, true)
    assert.strictEqual(cheese.replenishment, -6)
  })

  it("should still be touched after multiple touchings", () => {
    cheese.touch()
    cheese.touch()
    assert.strictEqual(cheese.touched, true)
    assert.strictEqual(cheese.replenishment, -6)
  })
})
