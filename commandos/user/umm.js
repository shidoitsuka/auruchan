const Discord = require('discord.js');
const superagent = require("superagent")
const nekoclient = require('nekos.life');
const neko = new nekoclient();

exports.run = async (auru, message, args) => {
    let ummm = args.join(" ");
    let {body} = await superagent.get("https://nekos.life/api/v2/8ball")
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Umm", "https://auruchan.pw/commands/user#umm", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
        .addField("Question :", `${ummm}`)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter("Nekos.Life 4 layfe")
        message.channel.send(embed)
}