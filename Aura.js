const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('ping!')) {
    message.reply('pong!');
  }
});

client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login('Mzg5NTc3NzM0NjkyNTM2MzIw.DQ9mFw.OUDflzdspdebiWzrwRzGnxVRjaA');
