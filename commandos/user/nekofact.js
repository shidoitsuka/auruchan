const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const superagent = require("superagent")
const neko = new nekoclient();

exports.run = async (auru, message, args) => {
    let {body} = await superagent.get("https://nekos.life/api/v2/fact")
    var embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Neko fact", "https://auruchan.pw/commands/user#neko-fact", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
        .setDescription(body.fact)
        .setColor("#688fff")
        .setFooter("Fact by Nekos.Life")
    message.channel.send(embed)
}