const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json");

module.exports.run = (client, message, args) => {

    
    module.exports.run = async (bot, message, args) => {
      if (!message.member.permissions.has(["MANAGE_ROLES", "ADMINISTRATOR"]))
        return message.channel.send(
          `":x:" + "**| Erreur, vous n'avez pas les permissions requises : \`MANAGE_ROLES, ADMINISTRATOR\`!"`
        );
    
    
      let rMember =
        message.mentions.members.first() ||
        message.guild.members.cache.find((m) => m.user.tag === args[0]) ||
        message.guild.members;
      let role =
        message.guild.roles.cache.find((r) => r.name == args[1]) ||
        message.guild.roles.cache.find((r) => r.id == args[1]) ||
        message.mentions.roles.first();
      if (!role)
        return message.channel.send(
          "Which role do I give to this user, frog lover? :point_right: :point_left:"
        );
    
      if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
        return message.channel.send(
          "Sorry, friend :broken_heart: :shrug: I don't have permission to perform this command!"
        );
    
      if (rMember.roles.has(role.id)) {
        return message.channel.send(
          `$rMember.displayName), already has this role!`
        );
      } else {
        await rMember.roles.add(role.id).catch((e) => console.log(e));
        message.channel.send(
          `The role ${role.name} has been added to ${rMember.displayName}.`
        );
      }
    
      let embed = new Discord.MessageEmbed()
        .setColor(colours.redlight)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .addField("Moderation:", "Addrole")
        .addField("Mute:", rMember.user.username)
        .addField("Reason:", reason)
        .addField("Date:", message.createdAt); 
    
      let sChannel = message.guild.channels.cache.find(
        (c) => c.name === "beans-the-frog"
      );
      sChannel.send(embedVariable);
    };
}

module.exports.help = {
  name: "addrole",
  aliases: ["addrole"]
}