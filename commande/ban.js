const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

      const user = message.mentions.users.first();
   if (!user) return message.channel.send(`":x: " + "**| Erreur, Usage : \`${PREFIX}ban <membre à bannir>\`**`);
    if (user) {
      const member = message.guild.member(user)
    if (member) {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`":x: " + "**| Erreur, Vous n'avez pas les permissions requises : \`BAN_MEMBERS\`**`); {
    if (message.member.hasPermission('BAN_MEMBERS')) {
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`":x: " + "**| Erreur, Il me manque la permission : \`BAN_MEMBERS\`**`);
        member.ban(`${user.tag} ban by ${message.author} !`).then(() => {
        message.channel.send(`**${user.tag} a été ban avec succés **!`);
      }).catch(err => {
        message.channel.send(`":x:" + "**| Erreur, Je ne peux pas bannir ce membre !**`);
        console.error(err);
      });

      } else {
        message.delete()
        message.channel.send(`":x: " + "**| Erreur, Ce membre ne se trouve pas sur le serveur !**`)
      } 
      }}}}


module.exports.help = {
    name: 'ban',
    aliases: ["ban"]
  };