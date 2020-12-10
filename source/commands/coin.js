const discord = require ("discord.js");
const dateformat = require('dateformat');
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).coin == "true"){
        function ht() {
            var rand = ['Heads!','Tails!'];
            return rand[Math.floor(Math.random()*rand.length)];
            }
        message.channel.send(ht())
    }
    else
    {
        console.log(chalk.red("Plugin Coin not enabled."))
    }
}