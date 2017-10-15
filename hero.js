const Hero = function (name, favouriteFood) {
  this.name = name
  this.health = 20
  this.favouriteFood = favouriteFood
  this.questLog = []
  this.gold = 0
  this.experience = 0
  this.inventory = {
    food: [],
    weapons: [],
    armour: [],
    spells: []
  }
}

Hero.prototype = {
  talk: function () {
    return `I am the great adventurer ${this.name}!`
  },

  eat: function (food) {
    if (this.favouriteFood === food.name) {
      this.health += food.replenishment * 1.5
    } else {
      this.health += food.replenishment
    }
  },

  takeQuest: function (quest) {
    this.questLog.push(quest)
  },

  completeQuest: function (quest) {
    if (this.questLog.indexOf(quest) === -1) return
    var reward = quest.complete()
    this.gold += reward.gold
    this.experience += reward.experience
  },

  questsByDifficulty: function () {
    return this.questLog.sort(
      (questA, questB) => questA.difficulty - questB.difficulty
    )
  },

  questsByUrgency: function () {
    return this.questLog.sort(
      (questA, questB) => questA.urgency - questB.urgency
    )
  },

  questsByGoldReward: function () {
    return this.questLog.sort(
      (questA, questB) => questA.reward.gold - questB.reward.gold
    )
  },

  completedQuests: function () {
    return this.questLog.filter(
      quest => quest.completed
    )
  },

  incompleteQuests: function () {
    return this.questLog.filter(
      quest => quest.completed === false
    )
  }
}

module.exports = Hero
