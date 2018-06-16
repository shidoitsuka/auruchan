const Discord = require('discord.js');
const superagent = require("superagent")

exports.run = async (auru, message, args) => {

    let {body} = await superagent.get("https://nekos.life/api/v2/why")
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Gimme quest", "https://auruchan.pw/commands/user#umm")
        .setDescription(body.why)
        .setColor("#688fff")
        .setFooter("Nekos.Life 4 layfe")
        message.channel.send(embed)
}