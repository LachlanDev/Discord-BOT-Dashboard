const discord = require ("discord.js");
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")
const fetch = require("node-fetch");

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).ball == "true"){
    if(args == ""){
        message.channel.send("Please ask a question.")
    }else
    {
        let uri = "https://8ball.delegator.com/magic/JSON/" + args;
        fetch(uri)
            .then(response => response.json())
            .then(json => {
            message.channel.send(json.magic.answer)
        });
    }
    }
    else
    {
        console.log(chalk.red("Plugin 8-Ball not enabled. "))
    }
}