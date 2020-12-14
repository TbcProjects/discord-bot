require('dotenv').config()

module.exports = giffy = {
  random: `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIF_API}&limit=25`
}