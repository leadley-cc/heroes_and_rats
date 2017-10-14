const assert = require("assert")
const Quest = require("../quest")

describe("Quest", () => {
  var quest

  beforeEach(() => {
    quest = new Quest(
      Quest.difficulties.HARD,
      Quest.urgencies.HIGH,
      new Map([["XP", 150], ["Gold", 100]])
    )
  })

  it("should have a difficulty level", () => {
    assert.strictEqual(quest.difficulty, Quest.difficulties.HARD)
  })

  it("should have an urgency level", () => {
    assert.strictEqual(quest.urgency, Quest.urgencies.HIGH)
  })

  it("should have a reward", () => {
    var expected = new Map([["XP", 150], ["Gold", 100]])
    assert.deepStrictEqual(quest.reward, expected)
  })

  it("should start with status available", () => {
    assert.strictEqual(quest.status, Quest.statuses.AVAILABLE)
  })
})
