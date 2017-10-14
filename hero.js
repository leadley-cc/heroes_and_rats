const Hero = function (name, favouriteFood) {
  this.name = name
  this.health = 20
  this.favouriteFood = favouriteFood
  this.questLog = []
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

  questsByDifficulty: function () {
    return this.questLog.sort(
      (questA, questB) => questA.difficulty - questB.difficulty
    )
  },

  questsByUrgency: function () {
    return this.questLog.sort(
      (questA, questB) => questA.urgency - questB.urgency
    )
  }
}

module.exports = Hero
