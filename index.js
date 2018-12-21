const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";

client.login('NTIyMzE0NzMzNDU4Njg1OTY3.Dv5t6A.Z7GtUfGYnF5yy1ch2inZsz8odSs');

client.on('message', message =>{
    if(message.content === "jeu"){
        message.reply('Si tu souhaite jouer avec mon patron demande lui en message privé');
        console.log('répond jeu');
    }
});