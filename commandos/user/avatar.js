const Discord = require('discord.js');

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = (bot, message, args) => {
    if (!message.mentions.users.size) {
      const avanya = new Discord.RichEmbed()
        .setAuthor("Avatar", "", message.author.displayAvatarURL)
        .setColor(0xFF9FBD)
        .setFooter(`${message.author.username}\'s avatar`)
        .setImage(message.author.displayAvatarURL);
      message.channel.send({
        embed
      });
    } else {
      const mentionMember = message.mentions.users.first();
      const avanya = new Discord.RichEmbed()
        .setAuthor("Avatar", "", mentionMember.displayAvatarURL)
        .setColor(0xFF9FBD)
        .setImage(mentionMember.displayAvatarURL)
        .setFooter(`${mentionMember.username}\'s avatar`);
      message.channel.send({
        avanya
      });
    }
  };