const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
    var number = message.content.split(PREFIX + 'clear')
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**:x: | Erreur, vous n'avez pas les permissions requises : \`MANAGE_MESSAGES\` !**");
    if(!number[1]) return message.channel.send(`**:x: | Erreur, défini un nombre de message à supprimer !**`)
        if (number[1] > 100) return message.channel.send("**:x: | Erreur, je peux supprimer qu'entre 1 et 100 messages !**")
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I don\'t have permissions to manage messages.**");
    if(isNaN(number[1])) return message.channel.send("**:x: | Erreur, défini un nombre !**");
      if (number[1]) {
    message.delete().catch(console.error)
    message.channel.bulkDelete(number[1]).catch(console.error)
}}


module.exports.help = {
    name: 'clear',
    aliases: ["clear"] 
}