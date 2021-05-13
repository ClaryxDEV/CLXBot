const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    let startTime = Date.now()
    const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(':ping_pong: Pong :')
        .setDescription(`Ma latence : **${Date.now() - message.createdTimestamp}** ms \nLa latence de l'API : **${Math.round(client.ws.ping)}** ms`)
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    message.channel.send('Ping en cours...').then(message => message.edit(embed))
}

module.exports.help = { 
    name: 'ping',
    aliases: ["latence"] 
  };