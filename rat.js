const Rat = function (type) {
  var healthValues = {
    TINY: 4,
    SMALL: 8,
    LARGE: 15,
    GIANT: 30
  }

  var attackValues = {
    TINY: 2,
    SMALL: 4,
    LARGE: 7,
    GIANT: 10
  }

  this.type = type
  this.health = healthValues[type]
  this.attack = attackValues[type]
}

Rat.prototype = {
  touchFood: function (food) {
    food.touch()
    this.health += 1
  }
}

module.exports = Rat
