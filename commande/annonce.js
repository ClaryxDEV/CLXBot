const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`":x: " + "**| Erreur, Vous n'avez pas les permissions requises : \`ADMINISTRATOR\`**`);
    if (message.member.hasPermission('ADMINISTRATOR')) {
      const SayAnnonce = message.content.slice(8).trim();
      const embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setTitle(`**__Annonce :__**`)
      .addField("**" + SayAnnonce + "**" , "@everyone")
      .setTimestamp(message.createdAt)
      .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
              message.channel.send(embed)
              message.delete()
    }
}



module.exports.help = {
    name: 'annonce',
    aliases: ["annonce"]
  };
