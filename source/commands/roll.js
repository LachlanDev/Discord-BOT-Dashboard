const discord = require ("discord.js");
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")
const throwdice = () => ~~(Math.random() * 6) + 1;

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).roll == "true"){
        message.channel.send("The Number is "+ throwdice())
    }else
    {
        console.log(chalk.red("Plugin Roll not enabled. "))
    }
}