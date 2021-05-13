const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send(`":x: " + "**| Erreur, usage : \`${PREFIX}kick <membre à expulser>\`**`);
    if (user) {
      const member = message.guild.member(user)
    if (member) {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`":x:" + "**| Erreur, vous n'avez pas les permissions requises : \`KICK_MEMBERS\`**`); {
    if (message.member.hasPermission('KICK_MEMBERS')) {
      if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`":x:" + "**| Erreur, il me manque la permission : \`KICK_MEMBERS\`**`);
        member.kick(`${user.tag} kick by ${message.author} !`).then(() => {
        message.channel.send(`${user.tag} a été expulsé avec succès !`);
      }).catch(err => {
        message.channel.send(`":x:" + "**| Erreur, je ne peux pas expulser ce membre !**`);
        console.error(err);
      });

      } else {
        message.delete()
        message.channel.send(`":x: " + "**| Erreur, ce membre ne se trouve pas sur le serveur !**`)
      } 
      }}}
    }

module.exports.help = {
    name: 'kick',
    aliases: ["kick"]
  };