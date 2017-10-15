const Food = function (name, replenishment) {
  this.name = name
  this.replenishment = replenishment
  this.touched = false
}

Food.prototype = {
  touch: function () {
    this.touched = true
    this.replenishment = - Math.abs(this.replenishment)
  }
}

module.exports = Food
