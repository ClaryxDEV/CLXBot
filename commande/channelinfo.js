const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const channel_info = new Discord.MessageEmbed()
    .setTitle("**__Informations sur ce channel:__**")
    .addField("**📝 Nom du channel:**", "<#" + message.channel.id + ">", true)
    .addField("**🔗 ID du channel:**", message.channel.id, true)
    .addField("**📋 Type de channel :**", message.channel.type, true)
    .addField("**📅 Date de création du channel :**", message.channel.createdAt, true)
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor("BLACK")
   return message.channel.send(channel_info)
}


module.exports.help = {
    name: 'channelinfo',
    aliases: ["ci"]
  };