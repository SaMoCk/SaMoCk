const Discord = require('discord.js');
const client = new Discord.Client();
const token = processe.env. token;


client.on('message', message =>{
    if(message.content === "jeu"){
        message.reply('Si tu souhaite jouer avec mon patron demande lui en message privé');
        console.log('répond jeu');
    }
});

bot.login(token);
