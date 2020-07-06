const Discord = require('discord.js');

const TOKEN = prosess.env.BOT_TOKEN;

var bot = new Discord.Client(); 

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "helo") {
        message.channel.send("hai");
    }

    if (message.content == "Fakhry") {
        message.channel.send("Fakhry bangsat");
    }

    if (message.content == "I love you") {
        message.channel.send("Love you too");
    }

    if (message.content == " Night") {
        message.channel.send("Good night");
    }

});

bot.login(TOKEN);
