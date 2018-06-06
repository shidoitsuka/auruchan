
const Discord = require("discord.js");
const sql = require("sqlite");
sql.open('./auru.sqlite');

/*

BUG DALAM CODE

- Bot tetap akan membuat channel meski sebelumnya bot telah membuat channel tersebut ( duplicate )
- Bot tidak aka bisa nangkap ID channel jika nama channel berubah 
    
    Kondisi bug : 
    Ketika bot telah membuat channel dengan jumlah pengguna yg statis
    ketika bot mulai mencari idchannel berdasarkan nama + guild member count --> Ketika member guild bertmabah ketika
    bot belum mencari idchannel dan channel telah dibuat, maka bot tidak dapat mencari channel tersebut
    
    Solusi saat ini : 
    Kasih nama channel statis dulu, abis channel id masuk, baru ganti ke dinamis.

*/

exports.run = async (auru, message, args) => {
    let guild = message.guild;
    let category = guild.createChannel(` Server Stats `, 'category', [{
      id: guild.id,
      deny: ['SPEAK', 'CONNECT'],
      allow: ['VIEW_CHANNEL']
    }]).then(category => {

        // CREATE MEMBER COUNTS!!
        guild.createChannel(`Member Count: ${guild.id}`, 'voice', [{    // POINT IT
            id: guild.id,
            deny: ['SPEAK', 'CONNECT'] ,
            allow: ['VIEW_CHANNEL'] 
          }]).then(channel => {
            channel.setParent(category.id);
        });
        
        guild.createChannel(`User Count: ${guild.id}`, 'voice', [{
            id: guild.id,
            deny: ['SPEAK', 'CONNECT'] ,
            allow: ['VIEW_CHANNEL'] 
          }]).then(channel => {
            channel.setParent(category.id);
        });
        
        guild.createChannel(`Bot Count: ${guild.id}`, 'voice', [{
            id: guild.id,
            deny: [ 'SPEAK', 'CONNECT']  ,
            allow: ['VIEW_CHANNEL']
          }]).then(channel => {
            channel.setParent(category.id);
        });
        
    let cat = message.guild.channels.get(category.id);
    cat.setPosition(0).then(() => {
        message.channel.send('I have set the channel stats')

        var preidmemcon = message.guild.channels.find("name", `Member Count: ${guild.id}`).id;
        var preidbocon = message.guild.channels.find("name", `Bot Count: ${guild.id}`).id;
        var preiducon = message.guild.channels.find("name", `User Count: ${guild.id}`).id;

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

        message.channel.send(`"``Member Count ChannelID : ${preidmemcon}\nMember Bot ChannelID : ${preidbocon}\nMember User ChannelID : ${preiducon}\n``"`)
    });
});
    
}