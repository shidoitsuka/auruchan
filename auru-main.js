const spmAgent = require('spm-agent-nodejs')
const Discord = require("discord.js");
const config = require('./config.json');
const auru = new Discord.Client({ disableEveryone: true});
const fsn = require("fs-nextra")
const fs = require('fs');
const readdir = (fs.readdir);
const sql = require("sqlite");
const chalk = require('chalk');

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