const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

    const embede = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("**:x:__Erreur :__**")
    .setDescription("**Mentionne un rôle !**")
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    if (!args[0]) return message.channel.send(embede);
  
  
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

    const embedee = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("**:x:__Erreur :__**")
    .setDescription("**Ce rôle n'existe pas !**")
    .setTimestamp(message.createdAt)
    .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    if (!role) return message.channel.send(embedee);

    const status = {
        false: "Non",
        true: "Oui"
    }
    const nombreDeMembre = message.guild.members.cache.filter(m => m.roles.cache.has(role)).size;
        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("**__Rôle Info :__**")
        .addField(":id:**ID :**", `${role.id}`, true)
        .addField("**:beginner:Nom :**", role.name, true)
        .addField("**:red_circle:Couleur :**", role.hexColor)
        .addField("**:busts_in_silhouette:Membres :**", nombreDeMembre)
        //.addField("**Position :**", role.position)
        .addField("**:safety_pin:Mentionable :**", status[role.mentionable])
        .setTimestamp(message.createdAt)
        .setFooter(`© CLX Bot`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
         return message.channel.send(embed);
}


module.exports.help = {
    name: 'roleinfo',
    aliases: ["ri"]
  };
