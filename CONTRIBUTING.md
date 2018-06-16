[![CREDITS](https://raw.githubusercontent.com/auruchan-development/auruchan-assets/master/depan-techdoc.png)](https://github.com/auruchan-development/auruchan/tree/master)

## AuruChan Repository Guidelines
> Hey There, I wish you will fork me and send me some patches!!

Currently, my repository is managed by `kina#9305`. Every main commits, Pull Request review is handled by her, and nothing can't pass to edit my main code without her review.

All code should be commited to [*development branch*](https://github.com/auruchan-development/auruchan/tree/development) because of I don't wanna take buggy code to my ~~body~~ code. Every experimental code will be run in development bot app, she's my younger sister which handle buggy code itself, sadly right ? I'll explain her later :smile:

Meanwhile I have dev branch for my sister, I have [***auruchan-release branch***](https://github.com/auruchan-development/auruchan/tree/development) which is my code i run at everyday. The branch update is very rare, only **major** update or **security - bugfix** will be pushed to my branch!! So, all code in that branch is qualified and ready to use! [***Ehh, if you found bugs, please create some patches/issues***](https://github.com/auruchan-development/auruchan/issues)


And if you asking about `then, why master branch is exist if you have auruchan-release branch?` Here's the answer :
> As I told before, code in auruchan-release is qualified and tested formerly, while development branch is used for experimenting, master branch is used to put finished commands from development to auruchan-release. So, the code will not crashed each other. we have many branch :smile:
> 


### Contributions Guides

**Oh yeah, Thanks for scrolling until this line ^^o^^ Love you!!** <br>I'll provide some guidances if you want to make me awasome-er

#### Forking and Github Stuff

Currently, my owner not trying add people to have write acces to my repository. All patches must go through via [`Pull Request`](https://github.com/auruchan-development/auruchan/pull) instead of directly commiting to a branch to prevent malicious code inserted by the contributors. Maybe its annoying but it keeps github flow keeps run :smile:

##### Forking and Pull Request

1. **Fork me first!**
2. After you fork me, create your own branch based [`development branch`](https://github.com/auruchan-development/auruchan/tree/development) to make sure you have the latest code changes and fixes.
3. Do you stuff at your own branch, fix anything you want!
4. After you finish your `job`, create a PR with `base fork` pointed to [`development branch`](https://github.com/auruchan-development/auruchan/tree/development)
5. Write the PR messages stuff, and create it
6. Wait for reply on PR or try contact my owner at my Discord Server
7. And your code will merged if its fits with my need
8. and I'll say **THANKS YOU!!!**


###### Pull Request

I'll not much say here but I'll just giving cheatsheet :

####### Pull Request Tamplate

`use this tamplate to create a PR messages (this work for issues too)`

```
### Problems / Topics
<!-- 
please write the problems / topics about the code over here, can be improvement changes or something good stuff
--->
### Suggested Solutions
<!-- 
Nahh, write your solutions to get problems done, this make people undestands how you fix the problems
--->

### Technical Information
<!--
Write you changed file here, so we can track it.
--->
### Timeline

### Misc
<!-- use this section to referring your PR to which issues or existing PR ---> 
BCC : Tag Someone here <optional>
BCC : Tag Someone here <optional>
```

## Code Styling and Coding Guidelines

Since my owner first time using `javascript` so, she cant say much about this

### Comment block

Since you're a contributor to my code, I'll happy if you putting `comments` to each code if seems complicated for my owner to read :smile:

#### Line Comments

You can use line comment to describe what the lines will work 
```JS
auru.on("message", async autoresponder => {
    if (autoresponder.author.bot) return; // ignore message from bot
    if (autoresponder.channel.type === "dm") return; // ignore message from dm

    let msg = autoresponder.content.toLowerCase();
    let sender = autoresponder.author;
    if (autoresponder.content.startsWith(prefix)) return;

    if (autoresponder.content === `<@${auru.user.id}>`) { // send a reply when auru get mentioned
        return autoresponder.channel.send("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/jilat.gif")
    }

});
```

#### Block Comments

You need Block Comments to describe something in long text
```JS
/*
This code will make an annoucement based on the arguments
The syntax will like this : 
" da..hey <channel> <your-message>"

This will send the message using webhook its have been configured b4
current commands launch is "-infos" and "-anon"
"-infos" = For information channel
"-anon" = For Announcement Channels
*/

const Discord = require("discord.js");
const serverOPinfos = new Discord.WebhookClient("x", "x");
const serverOPanon = new Discord.WebhookClient("x", "x");
exports.run = async (auru, message, args, prefix) => {
    let channel = args[0];
    let pesan = args.slice(1).join(" ");
    if(!message.member.roles.some(r=>["Ai.Chan", "Server Staff", "Server Controller", "Channel Manager"].includes(r.name)) )
        return message.reply("Kamu bukan **GABISA** buat annoucement!!!");
    if (`${channel}` === '-infos') {
        serverOPinfos.send(pesan)
    }
    if (`${channel}` === '-anon') {
        serverOPanon.send(pesan)
    }
}
```

### Global Variable

Since we (owner and her team) using `.dotenv` to store credentials datas, you should follow it and using that variable to call credentials data like `API Key` or `Token data`. This is little security layer to prevent bot raiding!

> I can't say much again xD

<br><br>
*End of file*