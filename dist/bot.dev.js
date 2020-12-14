"use strict";

var _require = require("discord.js"),
    Client = _require.Client,
    MessageAttachment = _require.MessageAttachment;

var client = new Client();

var fetch = require("node-fetch");

var giffy = require("./api/gif");

require("dotenv").config();

client.login(process.env.API_TOKEN);
client.on("message", pingResponse);
client.on("message", fetchGiffy);
var chId = process.env.BOT_TESTING;

function pingResponse(msg) {
  if (msg.content === "hi" && msg.channel.id === chId) {
    msg.channel.send("Hi! Welcome to ".concat(msg.channel));
  }
}

function fetchGiffy(msg) {
  if (msg.content === "gif" && msg.channel.id === chId) {
    fetch(giffy.random).then(function (res) {
      return res.json();
    }).then(function (obj) {
      console.log(obj);
      var gif = obj.data.url;
      var attachment = new MessageAttachment(gif);
      msg.channel.send(attachment);
    })["catch"](function (err) {
      console.log(err);
    });
  }
}