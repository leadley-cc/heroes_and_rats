const assert = require("assert")
const Hero = require("../hero")

describe("Hero", () => {
  var hero

  beforeEach(() => {
    hero = new Hero("Michael", "cheese")
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
    assert.strictEqual(hero.talk(), "I am the great adventurer Michael")
  })

  it("should start with an empty quest log", () => {
    assert.strictEqual(hero.questLog, [])
  })
})
