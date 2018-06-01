const Discord = require("discord.js");

exports.run = async (auru, message, args) => {
    let waaa = args[0].slice(0);
    let target = args.slice(1);
    let reason = args.slice(3).join(" ");

    let eooo = message.mentions.channels.first();
    let wiii = message.mentions.members.first();

    if(`${waaa}` === 'warn') {
            let warn = new Discord.RichEmbed()
            .setTitle("ECIEEEEEEEE")
            .addField("Target: ", `${targetuser}`, true)
            .addField("warned by: ", `${message.author}`, true)
            .addField("REASON:", `${reason}`, false)
            .setColor("RANDOM")
            .setFooter("Sakura Project | sHiRoNEko")
            .setThumbnail(`${u.avatarURL}`)
            .setAuthor(`${u.username}`, "", `${u.avatarURL}`)

        message.channels.get(eooo.id).send(warn)
    }
}


// NEW CODE [ PROBARLY NOT WORK ]
/*
let targetuser = message.mentions.members.first();
let anonchannel = message.mentions.channel.first();
let reason = // INI GIMANA ???

if(`${waaa}` === 'warn') {
    let warn = new Discord.RichEmbed()
    .setTitle("ECIEEEEEEEE")
    .addField("Target: ", `${targetuser}`, true)
    .addField("warned by: ", `${message.author}`, true)
    .addField("REASON:", `${reason}`, false)
    .setColor("RANDOM")
    .setFooter("Sakura Project | sHiRoNEko")
    .setThumbnail(`${u.avatarURL}`)
    .setAuthor(`${u.username}`, "", `${u.avatarURL}`)

message.channels.get(anonchannel).send(warn)
}
*/