const Rat = function (type) {
  var healthValues = {
    TINY: 4,
    SMALL: 8,
    LARGE: 15,
    GIANT: 30
  }

  this.type = type
  this.health = healthValues[type]
}

module.exports = Rat
