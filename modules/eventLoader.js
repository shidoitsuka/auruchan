// EventLoader
const Discord = require('discord.js');
const auru = new Discord.Client();
const eventReq = (event) => require(`../events/${event}`);
const config = require('../config.json');

module.exports = auru => {
    auru.on('ready', () => eventReq('ready')(auru));
    auru.on('message', eventReq('message'));
};