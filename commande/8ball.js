const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
       var quest = message.content.split(PREFIX + '8ball')
        var randOf = list=>list[Math.floor(Math.random()*list.length)]
        const author = message.author
        if (!quest[1]) return message.channel.send('**:x: Erreur | Il me faut ta question !**')

          var rep = [
        "Oui",
        "Non",
        "Peut être",
        "J'pense pas",
        "j'sais pas",
        "Bien sûr",
        "Sûrement pas",
        "Mais OUIII",
        "Problamement",
        "P'tet que oui, p'tet que non"
        ];
        var chosenRep = randOf(rep)
        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('__**8ball :**__')
        .addField(`**Ta question :**`, quest[1])
        .addField(`**La réponse :**`, chosenRep)
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
        message.channel.send(embed)

}

module.exports.help = {
    name: '8ball',
    aliases: ["8ball"]
  };
