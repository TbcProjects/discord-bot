const { MessageAttachment } = require("discord.js");
require("dotenv").config();

const fetch = require("node-fetch");
const chId = process.env.BOT_TESTING;

const giffy = {
  url: {
    random: `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIF_API}&limit=1`,
    trending: `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIF_API}&limit=1`,
  },
};

module.exports = {
  fetchRandomGif: async (msg) => {
    if (msg.content === "random gif" && msg.channel.id === chId) {
      await fetch(giffy.url.random)
        .then((res) => res.json())
        .then((obj) => {
          console.log(obj);
          const gif = obj.data.image_url;
          const attachment = new MessageAttachment(gif);
          msg.channel.send(attachment);
          console.log(attachment);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  fetchTrendingGif: async (msg) => {
    if (msg.content === "trending gif" && msg.channel.id === chId) {
      await fetch(giffy.url.trending)
        .then((res) => res.json())
        .then((obj) => {
          const gif = obj.data[0].url;
          const attachment = new MessageAttachment(gif);
          msg.channel.send(attachment);
          console.log(attachment);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  pingResponse: (msg) => {
    if (msg.content === "hi" && msg.channel.id === chId) {
      msg.channel.send(`Hi! Welcome to ${msg.channel}`);
    }
  },
};
