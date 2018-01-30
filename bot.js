
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
  
});

client.login(process.env.BOT_TOKEN);
