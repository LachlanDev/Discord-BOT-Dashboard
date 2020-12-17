const discord = require ("discord.js");
const jsonfile = require('jsonfile')
const file = './cfg/plugins.json'
const chalk = require("chalk")
const fetch = require("node-fetch");

exports.run = (client, message, args) =>{
    if(jsonfile.readFileSync(file).dog == "true"){
        let uri = "https://dog.ceo/api/breeds/image/random";
        fetch(uri)
            .then(response => response.json())
            .then(json => {
            message.channel.send(json.message)
        });
    }else
    {
        console.log(chalk.red("Plugin Dog not enabled. "))

    }
}