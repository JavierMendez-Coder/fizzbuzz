class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission);
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const filteredExplorers = this.filterByMission(explorers, mission);
    return filteredExplorers.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const filteredExplorers = this.filterByMission(explorers, mission);
    return filteredExplorers.map((explorer) => explorer.githubUsername);
  }

  static filterByStack(explorers, stack) {
    return explorers.filter((explorer) => explorer.stacks.includes(stack));
  }

  static getStringOfExplorersUsernamesByMission(explorers, mission) {
    const filteredExplorers = this.filterByMission(explorers, mission);
    return filteredExplorers.map((explorer) => explorer.githubUsername).join(", ");
  }
}

module.exports = ExplorerService;
