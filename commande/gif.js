const Discord = require("discord.js");
const gifSearch = require("gif-search")

module.exports.run = async (bot, message, args) => {
  message.delete()

let argsgif = message.content.split(" ").join(" ").slice(1);
gifSearch.random(argsgif).then(
  gifUrl => {

    let randomcolor = ((1 << 24) * Math.random() | 0).toString(16)
    var embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
      .setImage(gifUrl)
      .setTimestamp(message.createdAt)
      .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
      
    message.channel.send(embed);
  });
}

module.exports.help = {
    name: "gif",
    aliases: ["gif"]
}