const Hero = function (name, favouriteFood) {
  this.name = name
  this.health = 20
  this.favouriteFood = favouriteFood
}

Hero.prototype = {
  talk: function () {
    return `I am the great adventurer ${this.name}!`
  }
}

module.exports = Hero
