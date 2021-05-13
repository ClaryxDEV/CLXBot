const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(`BLACK`)
    .setTitle("**__Rejoint moi :__**", '')
    .addField('**Mon invite :**', `[C\'est ici](https://discord.com/api/oauth2/authorize?client_id=834098884807753728&permissions=8&scope=bot)`)
    .addField('**Mon serveur support :**', `[C'est ici](https://discord.gg/AcbYMV27f7)`)
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    return message.channel.send(embed)
  
}


module.exports.help = {
    name: 'support',
    aliases: ["invite"]
  };