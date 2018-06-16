const Discord = require("discord.js");
const chalk = require('chalk')
const config = require('../config.json');

const systemLog = new Discord.WebhookClient("450321482921541632", "EPfVybsfdsoGBn-UrDN0hZEjErKI1LHuAzh-q1_SiiUa3JKecqz5b_fHXJtHgU1ffurd");

module.exports = auru => {
    let start = Date.now(); systemLog.send("Hallu :joy:").then(message => { 
        let waaaaa = (Date.now() - start);
        let waa = (auru.ping).toFixed(2);
        let botStarted = new Discord.RichEmbed()
            .setColor('#ffaada')
            .setTitle("AuruChan Bot | ONLINE STATUS")
            .addField("Discord Tag:", `${auru.user.tag}`, true)
            .addField("Client ID:", `${auru.user.id}`, true)
            .addField("Ping:", `${waa}`, true)
            .addField("Latensi:", `${waaaaa}`, true)
            .addField("Prefix Users:", config.prefix, true)
            .addField("Prefix Operator Server:", config.aprefix, true)
            .addField("Prefix Owner:", config.oprefix, true)
            .addField("Bot Owner:", config.kina, true)    
            .setFooter("Sakura Project | sHiRoNEko")
            .setThumbnail(auru.user.displayAvatarURL)
        systemLog.send(botStarted);
        console.log("HAEEEEEE")
    });
};