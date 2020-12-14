const discord = require ("discord.js")
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const config = require('../cfg/config.json')
const chalk = require("chalk")

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).help == "true"){
        const help = new discord.MessageEmbed()
        .setColor('#b434eb')
        .setTitle(`${client.user.username} - Help`)
        .addField("Help",`Sends a list for all plugins enabled.\n **Usage:** ${config.prefix}help\n`)
        .setFooter("Made using Discord BOT Dashboard v1.0 by PapaSnags#1555", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
        if(jsonfile.readFileSync(file).info == "true"){
            help.addField("Server Info",`Sends information about the current server.\n **Usage:** ${config.prefix}server-info\n`)
        }
        if(jsonfile.readFileSync(file).userinfo == "true"){
            help.addField("User Info",`Sends information about given user.\n **Usage:** ${config.prefix}user-info @User\n`)
        }

        message.channel.send({embed: help })
    }
    else
    {
        console.log(chalk.red("Plugin Help not enabled."))
    }
}