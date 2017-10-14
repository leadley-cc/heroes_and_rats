const assert = require("assert")
const Quest = require("../quest")

describe("Quest", () => {
  var quest

  beforeEach(() => {
    quest = new Quest(
      quest.difficulties.HARD,
      quest.urgencies.HIGH,
      new Map(["XP", 150], ["Gold", 100])
    )
  })

  it("should have a difficulty level", () => {
    assert.strictEqual(quest.difficulty, quest.difficulties.HARD)
  })

  it("should have an urgency level", () => {
    assert.strictEqual(quest.urgency, quest.urgencies.HIGH)
  })

  it("should have a reward", () => {
    var expected = new Map(["XP", 150], ["Gold", 100])
    assert.deepStrictEqual(quest.reward, expected)
  })

  it("should start with status available", () => {
    assert.strictEqual(quest.status, quest.statuses.AVAILABLE)
  })
})
