const discord = require ("discord.js")
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require('chalk');

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).clear == "true"){
    const {member, mentions } = message
    const tag = `<@${member.id}>`
    if(message.guild.me.hasPermission('MANAGE_MESSAGES')){
        if(member.hasPermission("MANAGE_MESSAGES")){
            let deleteAmount;
    
            if(isNaN(args[0]) || parseInt(args[0]) <= 0) {return message.reply('Please specify a number!')}
            if(parseInt(args[0]) > 100){
                message.reply('You can only delete 100 messages at a time!')
            }else{
                deleteAmount = parseInt(args[0])
                message.channel.bulkDelete(deleteAmount,true)
                message.reply(`**Sucessfully Deleted** ${deleteAmount} messages`)
            }
        }else{
            message.channel.send(`${tag} you dont have permission.`)
        }
    }else{
        message.channel.send(`${tag} Sorry I dont have permission to Manage Messages!`)
    }
}else
{
    console.log(chalk.red("Plugin Clear not enabled."))
}
}