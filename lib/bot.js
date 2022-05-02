const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const numberToApplyFb = parseInt(msg.text);
  let responseBot = "Send a valid message";

  if (!isNaN(numberToApplyFb)) {
    const fizzbuzzTrick = ExplorerController.applyValidationInNumber(numberToApplyFb);
    responseBot = `Your number is: ${numberToApplyFb}. Validation: ${fizzbuzzTrick}`;
    bot.sendMessage(chatId, responseBot);
  } else if (msg.text.toLowerCase() === "node" || msg.text.toLowerCase() === "java") {
    const mission = msg.text.toLowerCase();
    const stringOfUsernames = ExplorerController.getStringOfExplorersUsernamesByMission(mission);
    responseBot = `List of Explorers from the ${mission} mission:\n${stringOfUsernames}.`;
    bot.sendMessage(chatId, responseBot);
  } else {
    bot.sendMessage(chatId, responseBot);
  }
});
