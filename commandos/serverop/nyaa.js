const Discord = require("discord.js");

exports.run = async (auru, message, args) => {

    const permissions = [
        "KICK_MEMBERS",
        "KICK_MEMBERS"
      ];
    
    if(!message.member.hasPermission(permissions)) {
         message.channel.send(`${message.author}, **Not Enough Permission to do this**`);
    }

    let waaa = args[0];
    let anon = args[1];
    let waae = message.mentions.member.first() || message.guild.members.get(args[2]);
    let nyaa = args.slice(3, args.length - 3).join(" ");
    let umae = message.guild.channels.find("name", (anon));

    if(waaa === 'warn') {
        let warn = new Discord.RichEmbed()
        .setTitle("AuruChan Moderation")
        .addField("Target: ", `${waae}`, true)
        .addField("warned by: ", `${message.author}`, true)
        .addField("REASON:", `${nyaa}`, false)
        .setColor("RANDOM")
        .setFooter("Sakura Project | AuruChan Moderation Modules")
        .setThumbnail(`${auru.user.displayAvatarURL}`)
        .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
    umae.send(warn)
    }

    if(waaa === 'kick') {
        let kick = new Discord.RichEmbed()
        .setTitle("AuruChan Moderation")
        .addField("Target: ", `${waae}`, true)
        .addField("Kicked by: ", `${message.author}`, true)
        .addField("REASON:", `${nyaa}`, false)
        .setColor("RANDOM")
        .setFooter("Sakura Project | AuruChan Moderation Modules")
        .setThumbnail(`${auru.user.displayAvatarURL}`)
        .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
    message.guild.member(waae).kick(nyaa);
    umae.send(kick)
    }

    if(waaa === 'ban') {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send(`${message.author}, **No Ban Members Act for you :P**`)
        }
        let ban = new Discord.RichEmbed()
        .setTitle("AuruChan Moderation")
        .addField("Target: ", `${waae}`, true)
        .addField("Banned by: ", `${message.author}`, true)
        .addField("REASON:", `${nyaa}`, false)
        .setColor("RANDOM")
        .setFooter("Sakura Project | AuruChan Moderation Modules")
        .setThumbnail(`${auru.user.displayAvatarURL}`)
        .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
    message.guild.member(waae).kick(nyaa);
    umae.send(ban)
    }
};