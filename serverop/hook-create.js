const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
    const nameAvatar = args.join(" ");
    const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg)/gi;
    if (!linkCheck.test(nameAvatar)) return message.reply("You must supply an image link.");
    const avatar = nameAvatar.match(linkCheck)[0];
    const name = nameAvatar.replace(linkCheck, "");
    message.channel.createWebhook(name, avatar)
        .then(webhook => webhook.edit(name, avatar)
            .catch(error => console.log(error)))
        .then(wb => message.author.send(`Here is your webhook https://ptb.discordapp.com/api/webhooks/${wb.id}/${wb.token}\n\nMOHON JAGA INI DENGAN BAIK, KAYAK JAGA PACAR KAMU DARI PELAKORRRRRRR!!!!.`)
            .catch(error => console.log(error)))
        .catch(error => console.log(error));
}