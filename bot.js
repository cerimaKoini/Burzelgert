var Discord = require('discord.js');
var client = new Discord.Client();

// Define a new schedule
var sched = later.parse.recur()
	.on('23:21:00').time().on(9).dayOfMonth().on(1).month();

function writeToChannel() {
	var channel = client.channels.find('name', 'bot-spielwiese');
	channel.send(textSched);
}

var timer = later.setTimeout(writeToChannel, sched);

var birthdays = [
	{
		Name: "Kerry",
		Day: 4,
		Month: 1
	},
	{
		Name: "Sonja",
		Day: 12,
		Month: 2
	},
	{
		Name: "Christa",
		Day: 13,
		Month: 2
	},
	{
		Name: "Roland",
		Day: 22,
		Month: 2
	},
	{
		Name: "Dennis",
		Day: 12,
		Month: 3
	},
	{
		Name: "Micha3",
		Day: 20,
		Month: 3
	},
	{
		Name: "Ingo",
		Day: 8,
		Month: 6
	},
	{
		Name: "Franz",
		Day: 22,
		Month: 7
	},
	{
		Name: "Nina",
		Day: 12,
		Month: 9
	},
	{
		Name: "Micha",
		Day: 10,
		Month: 10
	},
	{
		Name: "Nadja",
		Day: 10,
		Month: 12
	}
];

client.on('ready', () => {
	console.log('I am ready!');
	var currentDay = new Date(Date.now()).getDate();
	var currentMonth = new Date(Date.now()).getMonth()+1;
	
//	for (i = 0; i < birthdays.length; i++){
//		if (birthdays[i].Day == currentDay && birthdays[i].Month == currentMonth){
//			var channel = client.channels.find('name', 'bot-spielwiese');
//			channel.send("Alles Gute zum Geburtstag, " + birthdays[i].Name + "! :heart:");
//		}
//	}
});

client.on('message', message => {
	if (message.content === '!test') {
		// Send "Test bestanden." to the same channel
		message.channel.send('Test bestanden.');
	}
	else if (message.content === '!geburtstage') {
		// Send an embedded list of all birthdays to the same channel
//		var lines = "";
//		for (i = 0; i < birthdays.length; i++){
//			lines = lines + "**" + birthdays[i].Name + "** - " + birthdays[i].Day + "." + birthdays[i].Month + ".\n";
//		}
		message.channel.send({embed: {
			color: 15105570, //orange
			title: "Hier siehst du die Geburtstage der Wättebällchen im Überblick.",
		    	description: "**Kerry** - 4.1.\n**Sonja** - 12.2.\n**Christa** - 13.2.\n**Roland** - 22.2.\n**Dennis** - 12.3.\n**Micha3** - 20.3.\n**Ingo** - 8.6.\n**Franz** - 22.7.\n**Nina** - 12.9.\n**Micha** - 10.10.\n**Nadja** - 10.12."
		}});
	}
});

client.login(process.env.BOT_TOKEN);

//function evaluateBirthday(name) {
//	for (i = 0; i < birthdays.length; i++){
//		console.log(birthdays[i].Name + "_third");
//		if (birthdays[i].Name == name){
//			return "@" + name + ", dein Geburtstag ist am " + birthdays[i].Day + "." + birthdays[i].Month + ".";
//		}
//		else{
//			return "häh?";
//		}
//		
//	}
//}
