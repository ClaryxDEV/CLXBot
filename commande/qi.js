const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
        const author = message.author
        var result = Math.floor((Math.random() * 230) + 1)
        const embed = new Discord.MessageEmbed()
        .setTitle(`**__Test de qi :__**`)
        .setColor("BLACK")
        .setDescription(`Ton qi \`${author.username}\` est de **${result}**`)
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
        return message.channel.send(embed);
          }

module.exports.help = {
    name: 'qi',
    aliases: ["iq"]
  };