const Discord = require("discord.js");
const sql = require("sqlite");
sql.open('./auru.sqlite');

exports.run = async (auru, message, args) => {
    let guild = message.guild;
    let category = guild.createChannel(` Server Stats `, 'category', [{
      id: guild.id,
      deny: ['SPEAK', 'CONNECT'],
      allow: ['VIEW_CHANNEL']
    }]).then(category => {
        guild.createChannel(`Member Count: ${guild.members.size}`, 'voice', [{
            id: guild.id,
            deny: ['SPEAK', 'CONNECT'] ,
            allow: ['VIEW_CHANNEL'] 
          }]).then(channel => {
            channel.setParent(category.id);
        });
        guild.createChannel(`User Count: ${guild.members.size}`, 'voice', [{
            id: guild.id,
            deny: ['SPEAK', 'CONNECT'] ,
            allow: ['VIEW_CHANNEL'] 
          }]).then(channel => {
            channel.setParent(category.id);
        });
        guild.createChannel(`Bot Count: ${guild.members.size}`, 'voice', [{
            id: guild.id,
            deny: [ 'SPEAK', 'CONNECT']  ,
            allow: ['VIEW_CHANNEL']
          }]).then(channel => {
            channel.setParent(category.id);
        });
    let cat = message.guild.channels.get(category.id);
    cat.setPosition(0).then(() => {
        message.channel.send('I have set the channel stats')
    });
});
    
    sql.get(`SELECT * FROM guildData WHERE guildID = "${message.guild.id}`).then(row => {
        if (!row) {
          sql.run("INSERT INTO guildDAta (guildId, name) VALUES (?, ?)", [message.guild.id, message.guild.name]);
          message.channel.send("ID dah Masuk :)")
        } else {
          sql.run(`UPDATE guildData SET name = "${args[0]}" WHERE guildId = "${message.guild.id}"`);
          message.channel.send("ID dah diupdate :)")
        }
      }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS guildData (guildId INTEGER, name TEXT)").then(() => {
          sql.run("INSERT INTO guildDAta (guildId, name) VALUES (?, ?)", [message.guild.id, message.guild.name]);
        });
      });
    
}
