const discord = require ("discord.js");
const dateformat = require('dateformat');
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).userinfo == "true"){
    const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;
    const info = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setThumbnail(member.user.avatarURL())
    .setTitle(`User Info - ${member.user.username}`)
    .addField("Username", `${member.user.username}#${member.user.discriminator}`)
    .addField("Creation Date", dateformat(`${member.user.createdAt}`, 'dddd, mmmm dS, yyyy, h:MM TT'))
    .setFooter("Made using Discord BOT Dashboard v1.0 by PapaSnags#1555", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
    message.channel.send({embed: info })
    }
    else
    {
        console.log(chalk.red("Plugin User-Info not enabled. "))
    }
}
 