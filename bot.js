const { Client, MessageAttachment } = require("discord.js");
const client = new Client();
const fetch = require("node-fetch");
const giffy = require("./api/gif");
require("dotenv").config();

client.login(process.env.API_TOKEN);

client.on("message", pingResponse);
client.on("message", fetchGiffy);

const chId = process.env.BOT_TESTING;

function pingResponse(msg) {
  if (msg.content === "hi" && msg.channel.id === chId) {
    msg.channel.send(`Hi! Welcome to ${msg.channel}`);
  }
}

function fetchGiffy(msg) {
  if (msg.content === "gif" && msg.channel.id === chId) {
    fetch(giffy.random)
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj);
        const gif = obj.data.url;
        const attachment = new MessageAttachment(gif);
        msg.channel.send(attachment);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}



