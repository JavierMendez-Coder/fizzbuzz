class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission);
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const filteredExplorers = this.filterByMission(explorers, mission);
    return filteredExplorers.length;
  }

  static getExplorersUsernameByMission(explorers, mission) {
    const filteredExplorers = this.filterByMission(explorers, mission);
    return filteredExplorers.map((explorer) => explorer.githubUsername);
  }
}

module.exports = ExplorerService;
