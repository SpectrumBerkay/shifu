
const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  
client.on('message', msg => {
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0].toLowerCase()) {
  
  case "embed":
      var embed = new Discord.RichEmbed()
      .setAuthor(msg.author.username)
      .addField("Hoşgeldiniz", "TeamDojo", true)
      .setColor(0xFFFFFF)
      .setFooter("Spectrum! ©")
      .setThumbnail(msg.author.avatarURL)
 msg.channel.sendEmbed(embed);
 break;
  }
});
           
client.login(process.env.BOT_TOKEN);
