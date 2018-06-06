// TOP LEVEL CONFIGURATION
const Discord = require("discord.js");
// const superagent = require("superagent");
const auru = new Discord.Client({ disableEveryone: true});
// const auruVarG = require("./auru-global-var.js");
// const DiscordRPC = require("discord-rpc");
const fs = require("fs")
//const auruRPC = require("./auru-rpc.js"); // Test it LOL
//const auruAPI = require("./auru-api.js");
const sql = require("sqlite");
//const chalk = require('chalk');
//const auruCONF = require("./auru-config.json");

    // webhook datas
    const mentionHook = new Discord.WebhookClient("449875362646589441", "6HB1TyJuJIYr6ZOGyQ_ezjlZJgdXVwoPlhUykKxhd-fPRL2wzj6_v-tg7Fva2SpPHZ4o"); // WB IMVALID
    const systemLog = new Discord.WebhookClient("450321482921541632", "EPfVybsfdsoGBn-UrDN0hZEjErKI1LHuAzh-q1_SiiUa3JKecqz5b_fHXJtHgU1ffurd"); // WB INVALID
    //const systemLog = new Discord.WebhookClient(process.env.SYL_WBID, process.env.SYL_WBTKEN);
    //const mentionHook = new Discord.WebhookClient(process.env.MEN_HOID, process.env.MEN_HOKEN);

// Variable Berjalan
sql.open("./auru.sqlite"); //AURUCHAN SQL Database
var prefix = 'dn..'; // Users  prefix
var aprefix = 'da..'; // Operator Server Prefix
var oprefix = 'do..'; // Owner Prefix
var prefixes = (prefix) && (aprefix) && (oprefix); // Daftar Prefix

// PRESEQUITES BOT STARTUP

// System Logger Awal
auru.on("ready", async () => {
    let start = Date.now(); systemLog.send("Hallu :joy:").then(message => { 
        let waaaaa = (Date.now() - start);
    let waa = (auru.ping).toFixed(2);
    let botStarted = new Discord.RichEmbed()
    .setColor('#ffaada')
    .setTitle("AuruChan Bot | ONLINE STATUS")
    .addField("Discord Tag:", `${auru.user.tag}`, true)
    .addField("Client ID:", `${auru.user.client}`, true)
    .addField("Ping:", `${waa}`, true)
    .addField("Latensi:", `${waaaaa}`, true)
    .addField("Prefix Users:", `${prefix}`, true)
    .addField("Prefix Operator Server:", `${aprefix}`, true)
    .addField("Prefix Owner:", `${oprefix}`, true)
    .addField("Bot Owner:", process.env.KINA_DESU, true)    
    .setFooter("Sakura Project | sHiRoNEko")
    .setThumbnail(auru.user.displayAvatarURL)
    systemLog.send(botStarted);
    console.log("HAEEEEEE")
    });
});

// Automatisasi Komando
auru.on("message", async message => {

    // Konten Holder
    if (message.author.bot) return;
    if (message.channel.type === "dm") {
        if (message.author.id !== '303011486916411392' && message.author.id !== '303011486916411392') return;
    } // BLOCK COMMANDS VIA DM KECUALI OWNER

    // Message Content
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefixes.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    // Mention "myself" when someone mention me in a server
	if (message.isMentioned("303011486916411392")) {
        mentionHook.send(`${message.author.tag} MENTION KAMU TADI | AURU NOTIF for @Kina#9305  `)
    }
    if (message.isMentioned("444454206800396309")) {
        mentionHook.send(`${message.author.tag} MENTION KAMU TADI | AURU NOTIF for @King Of Erangel✔🇲🇾🇮🇩#2769 `)
    }

    //Cek apakah commands apa tidak
    if (!message.content.startsWith(prefix)) {
        if (!message.content.startsWith(aprefix)) {
            if (!message.content.startsWith(oprefix)) {
                return;
            }
        }
    }

    // OTOMATISASI
    if (message.content.startsWith(oprefix) && !message.author.id === '303011486916411392' ) {

        return message.reply("OMAE WA MO SHINDEIRU!!!!");

    } else if (message.content.startsWith(oprefix) && message.author.id === '303011486916411392' ) {
        // BEGIN OWNER COMMANDS
        try {
            let commandFile = require(`./commandos/owner/${cmd}.js`);
            commandFile.run(auru, message, args, prefixes);
        } catch (e) {
            systemLog.send(e.message)
        } finally {
            systemLog.send(`${message.author.tag} menggunakan perintah ${oprefix}${cmd} | DEDICATED ACCES`);
        }
        // END OWNER COMMANDS
    } else if (message.content.startsWith(aprefix) && !message.member.hasPermission("MANAGE_GUILD")) {

        return message.reply("Kamu Bukan Operator COK! :v");

    } else if (message.content.startsWith(aprefix) && message.member.hasPermission("MANAGE_GUILD")) {
        // BEGIN SERVER OP COMMANDS
        try {
            let commandFile = require(`./commandos/serverop/${cmd}.js`);
            commandFile.run(auru, message, args, prefixes);
            } catch (e) {
                systemLog.send(e.message)
            } finally {
                systemLog.send(`${message.author.tag} menggunakan perintah ${aprefix}${cmd} | SERVER OPERATOR`);
           }
        // END SERVER OP COMMANDS
    } else if (message.content.startsWith(prefix)) {
        // BEGIN NORM COMMANDS
        try {
            let commandFile = require(`./commandos/user/${cmd}.js`);
            commandFile.run(auru, message, args, prefixes);
        } catch (e) {
            systemLog.send(e.message)
        } finally {
            systemLog.send(`${message.author.tag} menggunakan perintah ${prefix}${cmd}`);
        }
        // END NORM COMMANDS
    }
});

// Auto responder messages
auru.on("message", async autoresponder => {
    if (autoresponder.author.bot) return;
    if (autoresponder.channel.type === "dm") return;

    let msg = autoresponder.content.toLowerCase();
    let sender = autoresponder.author;
    if (autoresponder.content.startsWith(prefix)) return;

    if (autoresponder.content === `<@${auru.user.id}>`) {
        return autoresponder.channel.send("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/jilat.gif")
    }
    if (autoresponder.content === `<@!${auru.user.id}>`) {
        return autoresponder.channel.send("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/jilat.gif")
    }

});

// LOGIN STUFF
auru.login(process.env.BOT_TOKEN)
