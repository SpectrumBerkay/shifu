const Discord = require("discord.js");

const TOKEN = "NDA3OTMwNjQxODU0NzU4OTEz.DVIqiQ.pV9F1LQTesSL4n_QKKmmFhTmpX8";
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

bot.login(TOKEN);

