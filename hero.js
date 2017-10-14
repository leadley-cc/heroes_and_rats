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
  }
}

module.exports = Hero
