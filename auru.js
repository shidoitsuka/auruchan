// TOP LEVEL CONFIGURATION
const Discord = require("discord.js");
const auru = new Discord.Client({ disableEveryone: true});
const fsn = require("fs-nextra")
const sql = require("sqlite");
require("./modules/function.js")(auru);
//const chalk = require('chalk');

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

    //Cek apakah commands apa tidak
    if (!message.content.startsWith(prefix)) {
        if (!message.content.startsWith(aprefix)) {
            if (!message.content.startsWith(oprefix)) {
                return;
            }
        }
    }

    // OTOMATISASI
    const permissions = [
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_MESSAGES",
        "MANAGE_WEBHOOKS",
        "MANAGE_NICKNAME",
        "MANAGE_ROLES"
      ];
      // START CHECK OWNER
      if (message.content.startsWith(oprefix) && !message.author.id === '303011486916411392') return message.reply("OMAE WA MO SHINDEIRU!!!!");
      if (message.content.startsWith(oprefix) && message.author.id === '303011486916411392') {
        try {
          let commandFile = require(`./commandos/owner/${cmd}.js`);
          commandFile.run(auru, message, args, prefixes);
        } catch (e) {
          systemLog.send(e.message)
        }
      }
      // END CHECK OWNER
      
      // START SERVER OP
      if (message.content.startsWith(aprefix) && !message.member.hasPermission(permissions)) return message.reply("You're not Server Operator");
      if (message.content.startsWith(aprefix) && message.member.hasPermission(permissions)) {
        try {
          let commandFile = require(`./commandos/serverop/${cmd}.js`);
          commandFile.run(auru, message, args, prefixes);
        } catch (e) {
          systemLog.send(e.message)
        }
      }
      // END SERVER OP
      
      // NORMAL AF
      if (message.content.startsWith(prefix)) {
        try {
          let commandFile = require(`./commandos/user/${cmd}.js`);
          commandFile.run(auru, message, args, prefixes);
        } catch (e) {
          systemLog.send(e.message)
        }
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