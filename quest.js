const Quest = function (difficulty, urgency, reward) {
  this.difficulty = difficulty
  this.urgency = urgency
  this.reward = reward
  this.status = 0
}

Quest.difficulties = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2,
  VERY_HARD: 3,
  IMPOSSIBLE: 4
}

Quest.urgencies = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
  EXTREME: 3
}

Quest.statuses = {
  AVAILABLE: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2
}

module.exports = Quest
