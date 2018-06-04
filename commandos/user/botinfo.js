const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setTitle("AuruChan Infos:", "https://vzrenggamani.github.io/auruchan")
		.setAuthor("AuruChan | Sakura Project", "https://vzrenggamani.github.io/auruchan", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
		.setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
		.addField("Nama Bot", `${auru.user.username}`, true)
		.addField("Dibuat", `${auru.user.createdAt}`, true);

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}
