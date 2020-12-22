const discord = require ("discord.js");
const dateformat = require('dateformat');
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) =>{
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    if(jsonfile.readFileSync(file).stats == "true"){
    const info = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setThumbnail(client.user.avatarURL())
    .setTitle(`${client.user.username} - Stats`)
    .addField("Username", `${client.user.username}#${client.user.discriminator}`)
    .addField("Server Count", `${client.guilds.cache.size}`)
    .addField("Uptime", duration)
    .addField("Response Time", `${Math.round(client.ws.ping)}ms`)
    .addField("Creation Date", dateformat(`${client.user.createdAt}`, 'dddd, mmmm dS, yyyy, h:MM TT'))
    .setFooter("Made using Discord BOT Dashboard v1.1 by PapaSnags#1555", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
    message.channel.send({embed: info })
    }
    else
    {
        console.log(chalk.red("Plugin User-Info not enabled."))
    }
}
 