const assert = require("assert")
const Reward = require("../reward")
const Quest = require("../quest")

describe("Quest", () => {
  var quest

  beforeEach(() => {
    quest = new Quest(
      Quest.difficulties.HARD,
      Quest.urgencies.HIGH,
      new Reward(100, 150, [])
    )
  })

  it("should have a difficulty level", () => {
    assert.strictEqual(quest.difficulty, Quest.difficulties.HARD)
  })

  it("should have an urgency level", () => {
    assert.strictEqual(quest.urgency, Quest.urgencies.HIGH)
  })

  it("should have a reward", () => {
    var expected = new Reward(100, 150, [])
    assert.deepStrictEqual(quest.reward, expected)
  })

  it("should start with false completed available", () => {
    assert.strictEqual(quest.completed, false)
  })

  it("should be able to set completed status", () => {
    quest.complete()
    assert.strictEqual(quest.completed, true)
  })
})
