const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle('**__Mes informations :__**')
    .addField(`**🔰__Nom :__**`, `${client.user.tag}`)
    .addField(`**:hash:__Tag__ :**`, `#${client.user.discriminator}`)
    .addField(`**:id:__Identifiant__ :**`, `${client.user.id}`)
    .addField(`**:globe_with_meridians:__Serveurs__ :**`, `${client.guilds.cache.size}`)
    .addField(`**:robot:__Version :__ **`, `v0.0`)
    .addField(`**📡__Librairie :__ **`, `discord.js`)
    .addField(`**:ribbon:__Version de la librairie :__ **`, `v12.5.1`)
    .addField(`**🛠️__Développeur__ :**`, `<@781934374559285276>`)
    .addField(`**📅__Date de création :__ **`, `05/05/2021`)
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
            return message.channel.send(embed)
}


module.exports.help = {
    name: 'botinfo',
    aliases: ["info", "bi"]
  };