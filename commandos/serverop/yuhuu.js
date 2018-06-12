const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
    var yuhuu = args[0];
    var prefixtarget = args[1]
    var peminta = message.author;
    auru.fetchUser(yuhuu).then(wah => {
            let botembed = new Discord.RichEmbed()
            .setTitle(wah.tag)
            .setDescription(`Wiuuu, Tunggu bentar yakkk. \n\n[**BOT INVITES LINK**](https://discordapp.com/oauth2/authorize?client_id=${yuhuu}&scope=bot&permissions=0)`)
            .addField("Nama Bot: ", `${wah.username}`, true)
            .addField("Ini Prefixnya: ", `${prefixtarget}`, true)
            .setColor("RANDOM")
            .setFooter("Sakura Project | sHiRoNEko")
            .setThumbnail(`${wah.avatarURL}`)
            .setAuthor(`${wah.username}`, "", `${wah.avatarURL}`)
            
            message.channel.send(botembed);
            })
        }
