const discord = require ("discord.js");
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")
const fetch = require("node-fetch");

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).cat == "true"){
        let uri = "https://aws.random.cat/meow";
        fetch(uri)
            .then(response => response.json())
            .then(json => {
            message.channel.send(json.file)
        });
    }else
    {
        console.log(chalk.red("Plugin Cat not enabled. "))

    }
}