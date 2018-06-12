const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setAuthor("AuruChan | Sakura Project", "https://auruchan.pw", "https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
		.setThumbnail(bicon)
		.setColor("pink")
		.addField("Nama Bot", `${auru.user.username}`, true)
		.addField("Owner", "kina#9305", true)
		.addField("Status", "Experimental", true)
		.addField("Version", "0.0.1-b120", true)
		.addBlankField()
		.addField("Developer Stuff")
		.addField("Github Repository", "[AURUCHAN GITHUB](https://github.com/vzrenggamani/auruchan)", true)
		.addField("Uptime Status", "[UPTIME STATS](https://auruchan.pw/stats)", true)
		.addField("Bug report", "[ISSUES](https://github.com/vzrenggamani/auruchan/issues)", true)
		.addField("Pull Request", "[PR LIST](https://github.com/vzrenggamani/auruchan/pull)", true)
		.setFooter("Auruchan - Sakura Project")

		message.channel.send(botembed);
}
