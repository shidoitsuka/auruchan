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

        // CREATE MEMBER COUNTS!!
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

        var preidmemcon = message.guild.channels.find("name", `Member Count: ${message.guild.members.size}`).id;
        var preidbocon = message.guild.channels.find("name", `Bot Count: ${guild.members.size}`).id;
        var preiducon = message.guild.channels.find("name", `User Count: ${guild.members.size}`).id;

        sql.get(`SELECT * FROM guildData WHERE guildID = "${message.guild.id}`).then(row => {
          if (!row) {
            sql.run("INSERT INTO guildData (guildId, name, memtalchaid, utalchaid, botalchaid) VALUES (?, ?, ?, ?, ?)", [message.guild.id, message.guild.name, preidmemcon, preiducon, preidbocon]);
            message.channel.send("ID dah Masuk :)")
          } else {
            sql.run(`UPDATE guildData SET name = "${message.guild.name}" WHERE guildId = "${message.guild.id}" WHERE preidmemcon ="${preidmemcon} WHERE preiducon ="${preiducon} WHERE preidbocon ="${preidbocon}`);
            message.channel.send("ID dah diupdate :)")
          }
        }).catch(() => {
          console.error;
          sql.run("CREATE TABLE IF NOT EXISTS guildData (guildId INTEGER, name TEXT, memtalchaid INTEGER, utalchaid INTEGER, botalchaid INTEGER)").then(() => {
            sql.run("INSERT INTO guildDAta (guildId, name, memtalchaid, utalchaid, botalchaid) VALUES (?, ?, ?, ?, ?)", [message.guild.id, message.guild.name, preidmemcon, preiducon, preidbocon]);
          });
        });
    });
});
    
}