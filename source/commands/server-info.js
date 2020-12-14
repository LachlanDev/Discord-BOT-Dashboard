const discord = require ("discord.js")
const dateformat = require('dateformat')
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).info == "true"){
        const info = new discord.MessageEmbed()
        .setColor('#b434eb')
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Server Info - ${message.guild.name}`)
        .addField("Server Name", `${message.guild.name}`)
        .addField("Server Owner", `${message.guild.owner}`)
        .addField("Member Count", `${message.guild.memberCount}`)
        .addField("Server Region", `${message.guild.region}`)
        .addField("Creation Date", dateformat(`${message.guild.createdAt}`, 'dddd, mmmm dS, yyyy, h:MM TT'))
        .setFooter("Made using Discord BOT Dashboard v1.0 by PapaSnags#1555", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
        message.channel.send({embed: info })
    }
    else
    {
        console.log(chalk.red("Plugin Server-Info not enabled."))
    }
};