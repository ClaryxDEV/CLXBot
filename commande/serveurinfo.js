const Discord = require('discord.js');
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(`${message.guild.name}`, message.guild.iconURL())
  .setThumbnail(message.guild.iconURL())  
  .addField(`Owner :`, `<@${message.guild.owner.id}>`)
  .addField('Préfix :', `${PREFIX}`)
  .addField('ID :', 'message.guild.id')
  .addField('Membres :', `${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} et ${message.guild.members.cache.filter(m=>m.user.bot).size} bots`)
  .addField('Temps AFK :', `${message.guild.afkTimeout / 60} minutes`)
  .addField('Salon AFK :', `${message.guild.afkChannelID === null ? 'Pas de salon AFK' : client.channels.get(message.guild.afkChannelID).name} ${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID}`)
  .addField('Région :', message.guild.region)
  .addField('Crée le :', message.guild.createdAt.toLocaleString())
  .setTimestamp(message.createdAt)
  .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
   return message.channel.send(embed);
};

module.exports.help = {
  name: 'serveurinfo',
  aliases: ["si"]
};