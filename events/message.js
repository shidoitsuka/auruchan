const Discord = require('discord.js');
const chalk = require('chalk');
const fsn = require('fs-nextra');
const config = require('../config.json');

module.exports = async function(message) {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const msg = message.content.toLowerCase();
    const args = message.content.slice(config.prefixes.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const auru = message.client;
    let commandFile;

    const permissions = [
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_MESSAGES",
        "MANAGE_WEBHOOKS",
        "MANAGE_NICKNAME",
        "MANAGE_ROLES"
      ];

    if (message.content.startsWith(`<@${config.botid}>`) || message.content.startsWith(`<@!${config.botid}>`)) {
        message.channel.send("Feel free to acces my [Homepage](http://auru.vzrenggamani.tk)")
    };

    if (!message.content.startsWith(config.prefix)) {
    if (!message.content.startsWith(config.aprefix)) {
    if (!message.content.startsWith(config.oprefix)) {
	return;
	}}}

    
    if (message.content.startsWith(config.prefix)) {
        try {
            commandFile = require(`../commandos/user/${cmd}.js`);
            commandFile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }

    if (message.content.startsWith(config.aprefix) && message.member.hasPermission(permissions)) {
        try {
            commandFile = require(`../commandos/serverop/${cmd}.js`);
            commandFile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }

    if (message.content.startsWith(config.oprefix) && message.author.id === '303011486916411392') {
        try {
            commandFile = require(`../commandos/owner/${cmd}.js`);
            commandFile.run(auru, message, args);
        } catch (e) {
            console.log(e.message)
        }
    }
}
