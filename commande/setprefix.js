const db = require('quick.db');
const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**Vous n’avez pas les permissions requises! - [ADMINISTRATOR]**")

        if (!args[0]) {
          let b = await db.fetch(`prefix_${message.guild.id}`);
          if (b) {
        return message.channel.send(
          `**Le prefix sur ce serveur est \`${b}\`**`
        );
      } else return message.channel.send("**Entrez un prefix a changer!**");
    } 
      
        try {

            let a = args.join(' ');
            let b = await db.fetch(`prefix_${message.guild.id}`)

            if (a === b) {
                return message.channel.send('**Ce prefix est déjà le prefix sur ce serveur !**')
            } else {
                db.set(`prefix_${message.guild.id}`, a)

                return message.channel.send(`**Le nouveau prefix a bien ete change\`${a}\`**`)
            }
        } catch (e) {
            console.log(e)
        }
    }

    module.exports.help = {
     name: "setprefix",
      aliases: ['sp', 'prefix']
     }