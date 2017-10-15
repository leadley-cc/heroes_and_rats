const assert = require("assert")
const Rat = require("../rat")
const Food = require("../food")

describe("Rat", () => {
  var giantRat
  var cheese

  beforeEach(() => {
    giantRat = new Rat("GIANT")
    cheese = new Food("cheese", 6)
  })

  it("should have a type", () => {
    assert.strictEqual(giantRat.type, "GIANT")
  })

  it("should have the correct health value", () => {
    assert.strictEqual(giantRat.health, 30)
  })

  it("should have the correct attack value", () => {
    assert.strictEqual(giantRat.attack, 10)
  })

  it("should be able to touch food and gain a little health", () => {
    giantRat.touchFood(cheese)
    assert.strictEqual(cheese.touched, true)
    assert.strictEqual(giantRat.health, 31)
  })
})
