const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
	 let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
      message.delete();
        let diff = (Date.now() - start); 
        let API = (auru.ping).toFixed(2)
        let embed = new Discord.RichEmbed()
        .setTitle(`WAAAAAAA!!!!!!!!`)
        .setColor(`RANDOM`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        message.channel.send(embed);
    });
}