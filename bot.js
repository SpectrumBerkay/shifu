
const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("fbebsi");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  
client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
 if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'fotoğrafım ne') {
    msg.reply(msg.author.avatarURL)
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'bot komutları') {
    msg.channel.sendMessage('fbebsiping,fbebsibot')
  }
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0].toLowerCase()) {
  
  case "embed":
      var embed = new Discord.RichEmbed()
      .addField("Team DOJO", "Designed by", true)
      .addField("Hoşgeldiniz", "Spectrum!", true)
      .setColor(0x00FFFF)
      .setFooter("Spectrum! ©")
      .setThumbnail(msg.author.avatarURL)
 msg.channel.sendEmbed(embed);
 break;
  }
});
           
client.login(process.env.BOT_TOKEN);
