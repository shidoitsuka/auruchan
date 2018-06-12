const Discord = require('discord.js');
const superagent = require("superagent")
const nekoclient = require('nekos.life');
const neko = new nekoclient();

exports.run = async (auru, message, args) => {

    let {body} = await superagent.get("https://nekos.life/api/v2/why")
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Gimme quest", "https://auruchan.pw/commands/user#umm", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
        .setDescription(body.why)
        .setColor("#688fff")
        .setFooter("Nekos.Life 4 layfe")
        message.channel.send(embed)
}