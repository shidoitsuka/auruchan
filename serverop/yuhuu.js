const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
    var yuhuu = args.slice(0).join(' ')
    var peminta = message.author;
    auru.fetchUser(yuhuu).then(u => {
            let botembed = new Discord.RichEmbed()
            .setTitle(u.tag)
            .setDescription("Wiuuu, Tunggu bentar yakkk. \n [_**BOT INVITES LINK**_](https://discordapp.com/oauth2/authorize?client_id=`${u.tag}`&scope=bot&permissions=0)")
            .addField("Nama Bot: ", `${u.username}`, true)
            .addField("Ini Prefixnya: ", "ISINYA-APA", true)
            .setColor("RANDOM")
            .setFooter("Sakura Project | sHiRoNEko")
            .setThumbnail(`${u.avatarURL}`)
            .setAuthor(`${u.username}`, "", `${u.avatarURL}`)
            
            message.channel.send(botembed);
            auru.channels.get("430404430056259584").send(botembed)
            })
        }
