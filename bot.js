const Discord = require("discord.js");

const PREFIX = "fbebsi"

var bot = new Discord.Client();

bot.on("ready", function() {
console.log("Ready")
});

bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;

if (message.content == "hello")
message.channel.sendMessage("Hi, there!");

if (!message.content.startWith(PREFIX)) return;

var args = message.content.substring(PREFIX.lenght).split(" ");

switch (args[0]) {
case "ping":
message.channel.sendMessage("Pong!");
break;
}

});

client.login(process.env.BOT_TOKEN);

