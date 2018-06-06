const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return;
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Haw Mach should is it ?');
    if (!amount && !user) return message.reply('Haw Mach should is it ? and Who ?');
    message.channel.fetchMessages({
            limit: amount,
        }).then((messages) => {
                if (user) {
                const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        });
}