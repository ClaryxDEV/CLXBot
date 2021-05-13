const discord = require("discord.js");
const superAgent = require("superagent");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
    var cat;

    cat = await superAgent
        .get("http://aws.random.cat/meow");

    console.log(cat.body);

    while (cat.body.file.endsWith(".webm") || cat.body.file.endsWith(".mp4")) {
        cat = await superAgent
            .get("http://aws.random.cat/meow");
        console.log(cat.body)
    }

    var embed = new discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setImage(cat.body.file)
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))

    return message.channel.send(embed);

}

module.exports.help = {
    name: "cat",
    aliases: ["chat"]
}
