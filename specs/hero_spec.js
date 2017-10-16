const assert = require("assert")
const Hero = require("../hero")
const Reward = require("../reward")
const Quest = require("../quest")
const Food = require("../food")

describe("Hero", () => {
  var hero
  var quest1
  var quest2
  var apple
  var cheese

  beforeEach(() => {
    hero = new Hero("Michael", "cheese")
    quest1 = new Quest(
      Quest.difficulties.HARD,
      Quest.urgencies.HIGH,
      new Reward(100, 150, [])
    )
    quest2 = new Quest(
      Quest.difficulties.EASY,
      Quest.urgencies.LOW,
      new Reward(15, 20, [])
    )
    apple = new Food("apple", 4)
    cheese = new Food("cheese", 6)
  })

  it("should have a name", () => {
    assert.strictEqual(hero.name, "Michael")
  })

  it("should start with 20 health", () => {
    assert.strictEqual(hero.health, 20)
  })

  it("should have a favourite food", () => {
    assert.strictEqual(hero.favouriteFood, "cheese")
  })

  it("should be able to talk", () => {
    assert.strictEqual(hero.talk(), "I am the great adventurer Michael!")
  })

  it("should start with an empty quest log", () => {
    assert.deepStrictEqual(hero.questLog, [])
  })

  it("should start with 0 gold", () => {
    assert.strictEqual(hero.gold, 0)
  })

  it("should start with 0 xp", () => {
    assert.strictEqual(hero.experience, 0)
  })

  it("should start with an empty inventory", () => {
    var expected = { food: [], weapons: [], armour: [], spells: [] }
    assert.deepStrictEqual(hero.inventory, expected)
  })

  it("should be able to eat food to replenish health", () => {
    hero.eat(apple)
    assert.strictEqual(hero.health, 24)
  })

  it("should be able to eat their fave food for 1.5x health", () => {
    hero.eat(cheese)
    assert.strictEqual(hero.health, 29)
  })

  it("should be able to eat touched food and lose health", () => {
    apple.touch()
    hero.eat(apple)
    assert.strictEqual(hero.health, 16)
  })

  it("should be able to add a quest to their quest log", () => {
    hero.takeQuest(quest1)
    assert.strictEqual(hero.questLog.length, 1)
    assert.ok(hero.questLog.includes(quest1))
  })

  it("should be able to add multiple quests to their quest log", () => {
    hero.takeQuest(quest1)
    hero.takeQuest(quest2)
    assert.strictEqual(hero.questLog.length, 2)
    assert.ok(hero.questLog.includes(quest1))
    assert.ok(hero.questLog.includes(quest2))
  })

  it("should be able to complete a quest and gain the reward", () => {
    hero.takeQuest(quest1)
    hero.completeQuest(quest1)
    assert.strictEqual(hero.gold, 100)
    assert.strictEqual(hero.experience, 150)
  })

  it("should not be able to complete a quest not on their quest log", () => {
    hero.completeQuest(quest2)
    assert.strictEqual(hero.gold, 0)
    assert.strictEqual(hero.experience, 0)
  })

  describe("When they have multiple quests on their quest log they", () => {
    beforeEach(() => {
      hero.takeQuest(quest1)
      hero.takeQuest(quest2)
    })

    it("should be able to sort quest log by difficulty", () => {
      var expected = [quest2, quest1]
      assert.deepStrictEqual(hero.questsByDifficulty(), expected)
    })

    it("should be able to sort quest log by urgency", () => {
      var expected = [quest2, quest1]
      assert.deepStrictEqual(hero.questsByUrgency(), expected)
    })

    it("should be able to sort quest log by gold reward", () => {
      var expected = [quest2, quest1]
      assert.deepStrictEqual(hero.questsByGoldReward(), expected)
    })

    it("should be able to select completed quests", () => {
      quest1.complete()

      var expected = [quest1]
      assert.deepStrictEqual(hero.completedQuests(), expected)
    })

    it("should be able to select incomplete quests", () => {
      quest1.complete()

      var expected = [quest2]
      assert.deepStrictEqual(hero.incompleteQuests(), expected)
    })
  })
})
