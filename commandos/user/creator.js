const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setTitle("AuruChan owner:", "https://vzrenggamani.github.io")
		.setDescription("Real name :\n Rengga Prakoso N.\n\nNick : vzrenggamani\n\nContact me :\n\n- [rengga.prakoso@gmail.com](emailto:rengga.prakoso@gmail.com)\n- [vzrenggamani.tk](https://vzrenggamani.github.io)\n- [vzrenggamani's Github](github.com/vzrenggamani)\n- [Whatssapp](https://api.whatsapp.com/send?phone=6285748250120)\n- Line : `vzrenggamani`\n- [Twitter](https://twitter.com/vzrenggamani)\n- [Instagram](https://instagram.com/vzrenggamani)\n- [Facebook Fanspage](https://facebook.com/vzrenggamani)")
    	.setColor("RANDOM")
   		.setFooter("AuruChan Ai | Sakura Project | sHiRoNEko", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
    	.setThumbnail("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
    	.setAuthor("AuruChan | Ai.Chan", "https://vzenggamani.tk", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}
