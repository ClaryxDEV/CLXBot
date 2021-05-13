const Discord = require('discord.js');
const fs = require('fs');
const {TOKEN, PREFIX} = require("./config.js");

const client = new Discord.Client();

client.login(process.env.TOKEN);

//Collection
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

//Console Log
fs.readdir("./commande/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("No commands found in the folder");

  commandes.forEach((f) => {
    let commande = require(`./commande/${f}`);
    console.log(`${f} commande chargée !`);
    
    client.commands.set(commande.help.name, commande);
    commande.help.aliases.forEach(alias => {
      client.aliases.set(alias, commande.help.name)
  });
  });
});


fs.readdir("./event/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./event/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });

}); 