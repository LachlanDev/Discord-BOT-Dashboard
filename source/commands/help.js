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
        .setFooter("Made using Discord BOT Dashboard v1.1 by LachlanDev#8014", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
        // Moderation Commands
        if(jsonfile.readFileSync(file).ban == "true"){
            help.addField("Ban",`Bans a user from the server.\n Usage: ${config.prefix}ban @user\n`)
        }
        if(jsonfile.readFileSync(file).kick == "true"){
            help.addField("Kick ",`Kicks a user from the server.\n Usage: ${config.prefix}kick @user\n`)
        }
        if(jsonfile.readFileSync(file).clear == "true"){
            help.addField("Clear ",`Clears messages from a channel.\n Usage: ${config.prefix}clear 5\n`)
        }
        // Utilities Commands
        if(jsonfile.readFileSync(file).userinfo == "true"){
            help.addField("User Info",`Sends information about given user.\n Usage: ${config.prefix}user-info @User\n`)
        }
        if(jsonfile.readFileSync(file).info == "true"){
            help.addField("Server Info",`Sends information about the current server.\n Usage: ${config.prefix}server-info\n`)
        }
        if(jsonfile.readFileSync(file).stats == "true"){
            help.addField("Stats",`Statistics of the BOT.\n Usage: ${config.prefix}stats\n`)
        }
        if(jsonfile.readFileSync(file).help == "true"){
            help.addField("Help",`Sends a list for all plugins / commands enabled.\n Usage: ${config.prefix}help\n`)
        }
        // Fun Commands 
        if(jsonfile.readFileSync(file).coin == "true"){
            help.addField("Coin Flip",`Flip a coin (heads / tails).\n Usage: ${config.prefix}coin\n`)
        }
        if(jsonfile.readFileSync(file).dog == "true"){
            help.addField("Dog",`Sends a random image of a dog.\n Usage: ${config.prefix}dog\n`)
        }
        if(jsonfile.readFileSync(file).cat == "true"){
            help.addField("Cat",`Sends a random image of a cat.\n Usage: ${config.prefix}cat\n`)
        }
        if(jsonfile.readFileSync(file).ball == "true"){
            help.addField("8-Ball",`Ask the 8-ball a question.\n Usage: ${config.prefix}8-ball\n`)
        }
        if(jsonfile.readFileSync(file).roll == "true"){
            help.addField("Roll",`Roles a dice (6-Sided).\n Usage: ${config.prefix}roll\n`)
        }



        message.channel.send({embed: help })
    }
    else
    {
        console.log(chalk.red("Plugin Help not enabled."))
    }
}