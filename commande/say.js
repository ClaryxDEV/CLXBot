const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const SayMessage = message.content.slice(4).trim();
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(SayMessage)
    .setFooter(`Envoyé par ${message.author.tag}`)
     message.channel.send(embed)
    
    message.delete()

}

module.exports.help = {
    name: 'say',
    aliases: ["dit"]
  };