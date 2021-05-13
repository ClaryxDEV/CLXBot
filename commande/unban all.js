const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async(bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) return message.channel.send(":x: " + "**| Erreur, il n'y a aucun membre banni sur le serveur.**");
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);
            });
        }).then(() => message.channel.send("**Toutes les personnes qui été bannies sont maintenant débannies !**")).catch(e => console.log(e))
    } else {return message.channel.send(":x: " + "**| Erreur, vous n'avez pas les permissions requises : \`ADMINISTRATOR\` !**")}
}

module.exports.help = {
    name:"unbanall",
    aliases:["debanall"]
}