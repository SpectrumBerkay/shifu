
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  
client.on('message', msg => {
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0].toLowerCase()) {
  
  case "!userinfo":
      var embed = new Discord.RichEmbed()
      .setAuthor("Kullanıcı Bilgileri!")
      .setDescription("")
      .setColor(0x00FF00)
      .setThumbnail(msg.author.avatarURL)
      .addField("Tam Ad", msg.author.username)
      .addField("ID", msg.author.id)
      .addField("Hesabı Ne zaman Oluşturduğu", msg.author.createdAt);
      
 msg.channel.sendEmbed(embed);
 break;
  }
});
           
client.login(process.env.BOT_TOKEN);
