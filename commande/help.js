const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`**__Ma page d\'aide :__**`)
    .setDescription(`*Mon préfix est ${PREFIX}*`)
    .addField('**🚓Modération :**', '\`ban, clear, kick, unbanall, annonce\`')
    .addField('**Configuration :**', 'setprefix')
    .addField('**🎈Fun :**', '\`8ball, say, avatar, qi, gif, dog, cat\`')
    .addField('**🛠Utilitaire :**', '\`ping, help, listeadmin, utilitaire\`')
    .addField('**💬Information :**', '\`botinfo, roleinfo, serveurinfo, listeadmin, support, channelinfo, vocal\`')
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
            return message.channel.send(embed)

} 


module.exports.help = {
    name: 'help',
    aliases: ["aide"]
  };
