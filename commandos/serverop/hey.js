const Discord = require("discord.js");
const serverOPinfos = new Discord.WebhookClient("450297824693714955", "K1WZXpSMWRXGacTPneG0P0C4LidOd4tnF3YPyR-4tQy_uePTGnosJJxeWCFySmUzkLx0");
const serverOPanon = new Discord.WebhookClient("450306982071631873", "HmOZlYc3j932PYJivlPe58bF3yC1INo1OmkKYMxhtiIhHMBYWfRTW28nho4D9IyFvznT");
exports.run = async (auru, message, args, prefix) => {
    let channel = args[0];
    let pesan = args.slice(1).join(" ");
    if(!message.member.roles.some(r=>["Ai.Chan", "Server Staff", "Server Controller", "Channel Manager"].includes(r.name)) )
        return message.reply("Kamu bukan **GABISA** buat annoucement!!!");
    if (`${channel}` === '-infos') {
        serverOPinfos.send(pesan)
    }
    if (`${channel}` === '-anon') {
        serverOPanon.send(pesan)
    }
}
