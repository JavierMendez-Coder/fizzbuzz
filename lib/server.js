const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FizzBuzz Api Welcome!" });
});

app.get("/v1/explorers/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorers = ExplorerController.getExplorersByMission(mission);

  res.status(200).json(explorers);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersAmount =
    ExplorerController.getExplorersAmountByMission(mission);

  res.status(200).json({ mission: mission, amount: explorersAmount });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersUsernames =
    ExplorerController.getExplorersUsernamesByMission(mission);

  res.status(200).json({ mission: mission, explorersUsernames });
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
  const score = req.params.score;
  const trick = ExplorerController.applyValidationInNumber(score);

  res.status(200).json({ score, trick });
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost: ${port}`);
});
