const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("**AuruChan - Commands List**")
    .setColor("smokewhite")
    .addField("`@everyone` Prefix Commands", "The Prefix is ``dn..``", false)
    .addField("Fun", "`hug` `gimmequest` `kiss` `neko` `nekofact` `pat` `poke` `umm`")
    .addField("Utility", "`avatar` `about` `userinfo`")
    .addField("Misc", "`auruprofile` `creator` `ping`")
    .addField("`Server Operator` Prefix Commands", "The Prefix is ``da..``", false)
    .addField("Message", "`cls`")
    .addField("members", "`nyaa`")
    .addField("Lookup", "`yuhuu`")
    .addField("Misc", "`hook-create`")
    message.channel.send(embed)
}
