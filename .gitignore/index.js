const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame();
    console.log("Le bot a bien été connecte");
});

bot.login("NTQ2MjgzNTE5MDgxNzA5NTY5.D1MTJg.qxvis5SQ-AgqC6InlSLtXnW-B0U");
