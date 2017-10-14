const assert = require("assert")
const Reward = require("../reward")

describe("Reward", () => {
  var reward

  beforeEach(() => {
    reward = new Reward(100, 50, [])
  })

  it("should have a gold value", () => {
    assert.strictEqual(reward.gold, 100)
  })

  it("should have an xp value", () => {
    assert.strictEqual(reward.experience, 50)
  })

  it("should have a list of items", () => {
    assert.deepStrictEqual(reward.items, [])
  })
})
