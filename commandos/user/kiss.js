const Discord = require('discord.js');
const superagent = require("superagent")

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = async (auru, message, args) => {

    const pokesamwan = [ //KATAKATAPOKESAMWAN
        `${message.author.tag}  is giving kiss to **${args[0]}**`,
        `Muahh!! >>__<<`
    ];

    const pokeself = [
        `No idea what ${message.author.tag} doing`,
        `Sorry ${message.author.tag}, i can't kiss you! >>w<<`  
    ]

    //VARIABLEJALAN
    let {body} = await superagent.get("https://nekos.life/api/v2/img/kiss")
    const wordAnswer = pokesamwan.random(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is quite funny to kiss themselves!`;
        let description, image, footer;
        !args[0] ? (description = alonedesc, footer = pokeselff) : (description = wordAnswer, footer = `${message.author.tag} kissing someone. CUTE!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Kiss", "https://auruchan.pw/commands/user#kiss")
        .setDescription(description)
        .setImage(body.url)
        .setColor("#688fff")
        .setFooter(`${footer}`)
        message.channel.send(embed)
};


 