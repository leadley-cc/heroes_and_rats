const assert = require("assert")
const Rat = require("../rat")
const Food = require("../food")

describe("Rat", () => {
  var giantRat

  beforeEach(() => {
    giantRat = new Rat("GIANT")
  })

  it("should have a type", () => {
    assert.strictEqual(giantRat.type, "GIANT")
  })

  it("should have the correct health value", () => {
    assert.strictEqual(giantRat.health, 30)
  })
})
