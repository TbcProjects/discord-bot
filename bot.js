const { Client } = require("discord.js");
const client = new Client();
require("dotenv").config();

const { fetchRandomGif, fetchTrendingGif, pingResponse } = require("./api/gif");

client.login(process.env.API_TOKEN);

//GIFFY_API
client.on("message", pingResponse);
client.on("message", fetchRandomGif);
client.on("message", fetchTrendingGif);

//YOUTUBE_API