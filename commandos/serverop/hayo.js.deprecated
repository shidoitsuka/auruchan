const Discord = require("discord.js");

exports.run = async (auru, message, args, prefixes) => {
    let waaa = args[0];
    let anon = args[1];
    let target = message.mentions.members.first() || message.guild.members.get(args[2]);
    let reason = args.splice(3, args.length - 3).join(" ");
    let eooo = message.guild.channels.find("name", (anon));

    if (!message.member.hasPermission("KICK_MEMBERS,", "BAN_MEMBERS"))
    return;
    if(args[0] === 'warn') {
            let warn = new Discord.RichEmbed()
            .setTitle("AuruChan Moderation")
            .addField("Target: ", `${target}`, true)
            .addField("warned by: ", `${message.author}`, true)
            .addField("REASON:", `${reason}`, false)
            .setColor("RANDOM")
            .setFooter("Sakura Project | AuruChan Moderation Modules")
            .setThumbnail(`${auru.user.displayAvatarURL}`)
            .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
        eooo.send(warn)
    }
  
  // NOR COMMANDOS
  
    if(args[0] === 'kick') {
            let kick = new Discord.RichEmbed()
            .setTitle("AuruChan Moderation")
            .addField("Target: ", `${target}`, true)
            .addField("Kicked by: ", `${message.author}`, true)
            .addField("REASON:", `${reason}`, false)
            .setColor("RANDOM")
            .setFooter("Sakura Project | AuruChan Moderation Modules")
            .setThumbnail(`${auru.user.displayAvatarURL}`)
            .setAuthor(`${auru.user.username}`, "", `${auru.user.displayAvatarURL}`)
        eooo.send(kick)
        target.kick(reason)
    }
}