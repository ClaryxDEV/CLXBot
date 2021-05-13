const discord = require("discord.js");
const superAgent = require("superagent");
 
module.exports.run = async (client, message, args) => {
    var dog;
 
    dog = await superAgent
        .get("https://random.dog/woof.json");
 
    console.log(dog.body);
 
    while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
        dog = await superAgent
            .get("https://random.dog/woof.json");
        console.log(dog.body)
    }
 
    var embed = new discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setImage(dog.body.url)
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
        return message.channel.send(embed);
 
}
 
module.exports.help = {
    name: "dog",
    aliases: ["chien"]
}