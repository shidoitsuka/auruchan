const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setAuthor("AuruChan | Sakura Project", "https://auruchan-web.herokuapp.com")
		.setThumbnail(bicon)
		.setColor("pink")
		.addField("Nama Bot", `${auru.user.username}`, true)
		.addField("Owner", "kina#9305", true)
		.addField("Status", "Experimental", true)
		.addField("Version", "0.0.1-b120", true)
		.addBlankField()
		.addField("Developer Stuff", "[CLICK ME](https://auruchan-web.herokuapp.com/techdoc.html)")
		.addField("Github Repository", "[CLICK ME]](https://github.com/auruchan-development)", true)
		.addField("Uptime Status", "[CLICK ME](https://auruchan-web.herokuapp.com)", true)
		.addField("Bug report", "[CLICK ME]](https://github.com/auruchan-development/auruchan/issues)", true)
		.addField("Pull Request", "[CLICK ME]](https://github.com/auruchan-development/auruchan/pull)", true)
		.setFooter("Auruchan - Sakura Project")

		message.channel.send(botembed);
}
