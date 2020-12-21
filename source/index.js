// Requirements
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
const config = require('./cfg/config.json')
const fs = require("fs");
const Enmap = require("enmap");
var request = require("request");
client.commands = new Enmap();
client.config = config;

// Update Check
console.log(chalk.blue("Checking for updates..."))
var options = {
  method: 'GET',
  url: `https://papa-snags.com/version/dbd.txt`,
  headers: {
    'User-Agent': 'Discord-Bot-Dashboard',
    useQueryString: true
  }
}
// Prase update request data to JSON.
request(options, function (error, response, body) {
  try 
  {
    jsonprased = JSON.parse(body)
  } 
  catch (e) 
  {
    console.log(chalk.red("Failed to check for updates, please try again or contact PapaSnags#1555"))
    process.exit()
  }
  
// Check if version matches request.
if(jsonprased.ver == "1.0"){
  console.log(chalk.green("Latest Version Found!"))

  // We listen for client's ready event.
  client.on("ready", () => {
    console.log(chalk.blue(`${client.user.username} is ready. (${client.guilds.cache.size} Guilds) | Prefix: ${config.prefix}`));
    client.user.setActivity(`For ${config.prefix}help`, { type: 'WATCHING' });
  });

  // Load Express Webserver
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  // Commands Load
  client.commands = new Enmap();
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log(chalk.magenta("Loading Commands..."))
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(chalk.green(`[+] ${commandName}`));
      client.commands.set(commandName, props);
    });
  });

  // Login our BOT
  client.login(config.token);
}

// Versions do not match (exit)
else
{
  console.log(chalk.red("Using an outdated version please download the latest version!"))
  process.exit()
}
});
