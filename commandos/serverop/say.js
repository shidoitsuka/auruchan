exports.run = async (auru, message, args, prefix) => {
    var say = args.slice(0).join(' ')
    if(!message.member.roles.some(r=>["Ai.Chan", "Server Staff", "Server Controller", "Channel Manager"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
    if (say) {
         message.delete()

         auru.channels.get("430404430056259584").send(say)
     }
     if (!say) {
        message.channel.send(`:x: | **Usage : ** ${prefix}say <Your Text Here>`)
     }
}
