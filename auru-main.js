const spmAgent = require('spm-agent-nodejs')
const Discord = require("discord.js");
const config = require('./config.json');
const auru = new Discord.Client({ disableEveryone: true});
const fsn = require("fs-nextra")
const fs = require('fs');
const readdir = (fs.readdir);
const sql = require("sqlite");
const chalk = require('chalk');
const mentionHook = new Discord.WebhookClient("449875362646589441", "6HB1TyJuJIYr6ZOGyQ_ezjlZJgdXVwoPlhUykKxhd-fPRL2wzj6_v-tg7Fva2SpPHZ4o");
const systemLog = new Discord.WebhookClient("450321482921541632", "EPfVybsfdsoGBn-UrDN0hZEjErKI1LHuAzh-q1_SiiUa3JKecqz5b_fHXJtHgU1ffurd");

require('./modules/eventLoader.js')(auru);
require("./modules/function.js")(auru);

sql.open("./auru.sqlite");

auru.on('warn', (e) => {
    console.log(chalk.bgYellow(e));
});
  
auru.on('error', (e) => {
    console.log(chalk.bgRed(e));
});

auru.login(process.env.BOT_TOKEN)