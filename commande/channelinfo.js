const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const channel_info = new Discord.MessageEmbed()
    .setTitle("**__Informations sur ce channel:__**")
    .addField("**๐ Nom du channel:**", "<#" + message.channel.id + ">", true)
    .addField("**๐ ID du channel:**", message.channel.id, true)
    .addField("**๐ Type de channel :**", message.channel.type, true)
    .addField("**๐ Date de crรฉation du channel :**", message.channel.createdAt, true)
    .setTimestamp(message.createdAt)
    .setFooter(`ยฉ CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor("BLACK")
   return message.channel.send(channel_info)
}


module.exports.help = {
    name: 'channelinfo',
    aliases: ["ci"]
  };