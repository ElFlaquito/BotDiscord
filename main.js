const { Client, MessageEmbed } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions: "off" });


client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  // --------------------------------------- REPEAT
  if (cmd === "repeat") {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 0 }).then(msg => console.log(`Message supprimé: ${msg.content}`));
  }
  // ---------------------------------------- ROLES
  if (cmd === "role") {
    const channel = client.channels.cache.get("7715492459030904892");
    const role = msg.guild.roles.cache.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas mon gars");
    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`Le role ${role} a été supprimé à ${msg.author}.`);
      msg.delete({ timeout: 0 });
    } else {
      msg.member.roles.add(role);
      channel.send(`Le role ${role} a été ajouté à ${msg.author}.`);
      msg.delete({ timeout: 0 });
    }
  }
  // ------------------------EMBEDS
  if (cmd === "info") {
    const embed = new MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Membres", msg.guild.memberCount, true)
      .addField("Owner", msg.guild.owner.user.tag, true)
      .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
      .setTimestamp()
      .setImage("https://tenor.com/view/anime-vinland-saga-thorfinn-thorkell-gif-15044387")
      .setColor(255)
      .setTitle("by Yass#2255");

    msg.channel.send(embed);
  }
});
// ---------------------------BIENVENUE
client.on("guildMemberAdd", member => {
  member.send("Bienvenue sur ce discord");
  const channel = client.channels.cache.get("715649720625659964");
  channel.send(`${member} Est en TN Lacoste, bienvenue a lui `);
});

client.login(TOKEN);
// -----------------------------CONSOLE,LOGS
client.on("ready", () => console.log("Pret au combat"));
client.on("error", () => console.error);
client.on("warn", () => console.warn);
client.on("debug", console.log);
// ---------------------------------API
const fetch  = require("node.fetch");
const { MessageEmbed } = require("discord.js");


module.exports =  async (client, message, args) => {
  msg.delete({ timeout: 0 });

  if (args[0] === "random") {
const random = await fetch("https://randomfox.ca/floof/")
.then(res => res.json())
.then(json => json.image);

const embed = new MessageEmbed()
.setImage(Fox)
.setFooter("API = 'https://randomfox.ca/floof/'")
message.channel.send(embed);
  }
};

