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
        `${message.author.tag}  is pated **${args[0]}**`,
        `Nyaa!! Nyaa!!`
    ];

    const pokeself = [
        `${message.author.tag}  is lonely`,
        `Anybody, please pat ${message.author.tag}`,
        `Sorry ${message.author.tag}, i cant summon someone to pat you >>w<<`  
    ]

    //VARIABLEJALAN
    const wordAnswer = pokesamwan.random(),
        patimage = await neko.getSFWPat(),
        pokeselff = pokeself.random(),
        alonedesc = `**${message.author.username}** is lonely and patting themselves..\nHere some pat for ${message.author.tag}`;
    let description, image, footer;

    // PILIH MANA HAYOO
    !args[0] ? (description = alonedesc, image = patimage.url, footer = pokeselff) : (description = wordAnswer, image = patimage.url, footer = `${message.author.tag} poked someone. CUTE!`);

    // RESULTS
    const embed = new Discord.RichEmbed()
        .setAuthor("AuruChan - Poke", "https://auruchan.pw/commands/user#pat", `${patimage.url}`)
        .setDescription(description)
        .setImage(`${patimage.url}`)
        .setColor("#688fff")
        .setFooter(`${footer}`)
    message.channel.send("*Chotto ne >>__<<")
        .then(m => m.edit({
            embed
        }))
};


 