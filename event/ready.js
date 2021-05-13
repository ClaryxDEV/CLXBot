const { PREFIX } = require("../config.js");

module.exports = async(client, data) => {
  setInterval(function () {
  client.user.setActivity(`${PREFIX}help | CLX Bot`, { type: "PLAYING" });
  }, 20000)
} 