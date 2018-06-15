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
        `${message.author.tag}  is poking **${args[0]}**`,
        `Nyaa!! Nyaa!!`
    ];

    const pokeself = [
        `${message.author.tag}  is lonely`,
        `Anybody, please poke ${message.author.tag}`,
        `Sorry ${message.author.tag}, i cant summon someone to poke you >>w<<`  
    ]

    //VARIABLEJALAN
    let {body} = await superagent.get("https://nekos.life/api/v2/img/poke")
    const wordAnswer = pokesamwan.random(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is lonely and poking themselves..\nHere some poke for ${message.author.tag}`;
        let description, image, footer;
        !args[0] ? (description = alonedesc, footer = pokeselff) : (description = wordAnswer, footer = `${message.author.tag} poking someone. CUTE!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Poke", "https://auruchan.pw/commands/user#poke")
        .setDescription(description)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter(`${footer}`)
        message.channel.send(embed)
};


 