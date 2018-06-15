const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const superagent = require("superagent")
const neko = new nekoclient();

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = async (auru, message, args) => {

    const pokesamwan = [ //KATAKATAPOKESAMWAN
        `${message.author.tag}  is pating **${args[0]}**`,
        `Nyaa!! Nyaa!!`
    ];

    const pokeself = [
        `${message.author.tag}  is lonely`,
        `Anybody, please pat ${message.author.tag}`,
        `Sorry ${message.author.tag}, i cant summon someone to pat you >>w<<`  
    ]

    //VARIABLEJALAN
    let {body} = await superagent.get("https://nekos.life/api/v2/img/pat")
    const wordAnswer = pokesamwan.random(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is lonely and patting themselves..\nHere some pat for ${message.author.tag}`;
        let description, image, footer;
        !args[0] ? (description = alonedesc, footer = pokeselff) : (description = wordAnswer, footer = `${message.author.tag} patting someone. CUTE!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Pat", "https://auruchan.pw/commands/user#pat")
        .setDescription(description)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter(`${footer}`)
        message.channel.send(embed)
};


 