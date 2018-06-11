const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let status = { 
        "online": "<:online:449590947165110283> Online",
        "idle": "<:away:449590947110584321> Idle",
        "dnd": "<:dnd:449590946879766539> Do Not Disturb",
        "invisible": "<:offline:449590947047669760> Offline"
    }

    let user;
    if (message.mentions.users.first()) {
    user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    var member = message.guild.member(user)
    let embed = new Discord.RichEmbed()
    .setAuthor(user.tag, "", user.displayavatarURL)
    .setThumbnail(user.avatarURL)
    .setFooter("Auruchan | userinfo")
    .setColor("random")
    .addField("ID", user.id)
    .addField("Status", user.presence.status)
    .addField("Nickname", message.guild.member(user).nickname)
    .addField("Join at", message.guild.member(user).joinedAt)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '), true)
    message.channel.send(embed)

}