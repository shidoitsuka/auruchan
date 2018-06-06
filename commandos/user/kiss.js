const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

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
    const wordAnswer = pokesamwan.random(),
        hugimage = await neko.getSFWKiss(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is quite funny to kiss themselves!`;
    let description, image, footer;

    // PILIH MANA HAYOO
    !args[0] ? (description = alonedesc, image = hugimage.url, footer = pokeselff) : (description = wordAnswer, image = hugimage.url, footer = `NO IDEA!!!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Poke", "https://auruchan.pw/commands/user#kiss", `${hugimage.url}`)
        .setDescription(description)
        .setImage(`${hugimage.url}`)
        .setColor("#688fff")
        .setFooter(`${footer}`)
    message.channel.send("*Chotto ne >>__<<")
        .then(m => m.edit({
            embed
        }))
};


 