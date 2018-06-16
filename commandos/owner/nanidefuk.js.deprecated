const Discord = require("discord.js");
const systemLog = new Discord.WebhookClient("450321482921541632", "EPfVybsfdsoGBn-UrDN0hZEjErKI1LHuAzh-q1_SiiUa3JKecqz5b_fHXJtHgU1ffurd");

exports.run = async (auru, message, args, oprefix) => {
    let resetcode = args[0];
    let resetmessages = args.slice(1).join("");
    if (message.content.startsWith(oprefix) && !message.author.id === '303011486916411392' ) {

        return message.reply(" CONTACT " + process.env.KINA_DESU + " TO RESET THE BOT!!");

    }
    if (`${resetcode}` !== process.env.RESET_CODE) {

        return message.reply("Kode Reset Tidak Diautentikasi");

    } else if (`${resetcode}` === process.env.RESET_CODE) {

        let restartinfos = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle("AuruChan Bot | RESTART COMMANDS")
            .addField("Requested By:", `${message.author.tag}`, true)
            .addField("Client ID:", process.env.BOT_ID, true)
            .addField("RESET CODE:", `${resetcode}`, true)
            .addField("Owner Acces:", `TRUE`, true)   
            .setFooter("Sakura Project | sHiRoNEko")
            .setThumbnail(auru.user.displayAvatarURL)
            console.log("Resetting bot!!!")
            systemLog.send(restartinfos)
            message.author.send(restartinfos)
        .then(msg => auru.destroy())
        .then(() => auru.login(process.env.BOT_TOKEN))

    }
    
}