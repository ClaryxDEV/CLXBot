const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {

        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;
        let counter = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        const embed = new Discord.MessageEmbed()
            .setTitle("**__En vocal :__**")
            .setDescription( "**" + count + "**" + " personnes sont en vocal actuellement.")
            .setColor(`BLACK`)
            .setTimestamp(message.createdAt)
            .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
            return message.channel.send(embed)

    }

module.exports.help = {
    name: "vocal",
    aliases: ["voc"]
  };