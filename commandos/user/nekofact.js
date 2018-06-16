const Discord = require('discord.js');
const nekoclient = require('nekos.life');

exports.run = async (auru, message, args) => {
    let {body} = await superagent.get("https://nekos.life/api/v2/fact")
    var embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Neko fact", "https://auruchan.pw/commands/user#neko-fact")
        .setDescription(body.fact)
        .setColor("#688fff")
        .setFooter("Fact by Nekos.Life")
    message.channel.send(embed)
}