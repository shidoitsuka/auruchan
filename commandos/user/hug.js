const Discord = require('discord.js');
const superagent = require("superagent")

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = async (auru, message, args) => {

    const pokesamwan = [ //KATAKATAPOKESAMWAN
        `${message.author.tag}  is hugging **${args[0]}**`,
        `Mwaaaaa!!!!`
    ];

    const pokeself = [
        `No idea what ${message.author.tag} doing`,
        `Anybody, please hug ${message.author.tag}`,
        `Sorry ${message.author.tag}, i can't hug you! >>w<<`  
    ]

    //VARIABLEJALAN
    let {body} = await superagent.get("https://nekos.life/api/v2/img/hug")
    const wordAnswer = pokesamwan.random(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is lonely and hugging themselves..\nHere some hugs for ${message.author.tag}`;
    let description, image, footer;
    !args[0] ? (description = alonedesc, footer = pokeselff) : (description = wordAnswer, footer = `${message.author.tag} hugging someone. CUTE!`);

    // RESULTS
    
    var embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Hug", "https://auruchan.pw/commands/user#hug")
        .setDescription(`${description}`)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter(`${footer}`)
    message.channel.send(embed)
}; 