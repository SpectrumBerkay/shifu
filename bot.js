
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
      .setDescription("This is User Info!")
      .setColor(0xFFFFFF)
      .setField("ID", msg.author.id)
      .setField("Created At", msg.author.createdAt)
 msg.channel.sendEmbed(embed);
 break;
  }
});
           
client.login(process.env.BOT_TOKEN);
