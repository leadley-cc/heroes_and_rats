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
})
