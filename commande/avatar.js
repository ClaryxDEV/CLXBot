const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
       const member = message.mentions.members.first() || message.member
       const avatarEmbed = new Discord.MessageEmbed()
            .setDescription(`**Voici la photo de profil de ${member.user.tag} :**`)
            .setColor("BLACK")
            .setImage(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 4096 }))
            .setTimestamp(message.createdAt)
            .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
            return message.channel.send(avatarEmbed)
    }

module.exports.help = {
    name: 'avatar', 
    aliases: ["pdp", "pp", "pfp"]
  };