const { Client, MessageAttachment } = require("discord.js");
const client = new Client();
require("dotenv").config();

client.login(process.env.API_TOKEN);

client.on("message", pingResponse);
client.on("message", giffy);

const chId = process.env.BOT_TESTING;

function pingResponse(msg) {
  if (msg.content === "hi" && msg.channel.id === chId) {
    msg.channel.send(`Hi! Welcome to ${msg.channel}`);
  }
}

function giffy(msg) {
  if (msg.content === "meat" && msg.channel.id === chId) {
    const attachment = new MessageAttachment(
      "https://media.giphy.com/media/8q1YGcf9zanxC/giphy.gif"
    );
    msg.channel.send(attachment);
  }
}
