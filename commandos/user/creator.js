const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setTitle("AuruChan owner:", "https://vzrenggamani.github.io")
		.setColor("RANDOM")
		.addField("Email", "sakura.fukoka@merahputih.id")
		.addField("Github Account", "[CLICK ME]](https://github.com/vzrenggamani)", true)
		.addField("Twitter", "[CLICK ME](https://twitter/vzrenggamani)", true)
		.addField("Facebook", "[CLICK ME]](https://facebook.com/vzrenggamani)", true)
		.addField("Instagram", "[CLICK ME]](https://instagram.com/vzrenggamani)", true)
   		.setFooter("AuruChan Ai | Sakura Project | sHiRoNEko")
    	.setThumbnail("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
    	.setAuthor("AuruChan | Ai.Chan", "https://auruchan-web.herokuapp.com")
		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}
