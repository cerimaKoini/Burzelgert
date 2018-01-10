var Discord = require('discord.js');
var client = new Discord.Client();
const CronJob = require('cron').CronJob;

var channel = client.channels.find('name', 'bot-spielwiese');

var birthdays = [
	{
		Name: "Kerry 🌙",
		Cron: '0 8 4 1 *',
		Day: 4,
		Month: 1
	},
	{
		Name: "Kerry 🌙",
		Cron: '28 0 11 1 *',
		Day: 12,
		Month: 2
	},
	{
		Name: "Sonnus",
		Cron: '0 8 12 2 *',
		Day: 12,
		Month: 2
	},
	{
		Name: "Sambin",
		Cron: '0 8 13 2 *',
		Day: 13,
		Month: 2
	},
	{
		Name: "1973roland",
		Cron: '0 8 22 2 *',
		Day: 22,
		Month: 2
	},
	{
		Name: "Darthod",
		Cron: '0 8 12 3 *',
		Day: 12,
		Month: 3
	},
	{
		Name: "Hyean",
		Cron: '0 8 20 3 *',
		Day: 20,
		Month: 3
	},
	{
		Name: "Macgoon",
		Cron: '0 8 8 6 *',
		Day: 8,
		Month: 6
	},
	{
		Name: "Sabios",
		Cron: '0 8 22 7 *',
		Day: 22,
		Month: 7
	},
	{
		Name: "Nina",
		Cron: '0 8 12 9 *',
		Day: 12,
		Month: 9
	},
	{
		Name: "Micha",
		Cron: '0 8 10 10 *',
		Day: 10,
		Month: 10
	},
	{
		Name: "Pigwedgon",
		Cron: '0 8 10 12 *',
		Day: 10,
		Month: 12
	}
];



client.on('ready', () => {
	console.log('I am ready!');
	var currentDay = new Date(Date.now()).getDate();
	var currentMonth = new Date(Date.now()).getMonth()+1;
	
	// Creating a new job
	const cron1 = new CronJob(birthdays[1].Cron, function () {
		channel.send("@" + birthdays[1].Name + ", alles Gute zum Geburtstag.");
	}, null, true, 'Europe/Vienna');
	
	
	
//	for (i = 0; i < birthdays.length; i++){
//		if (birthdays[i].Day == currentDay && birthdays[i].Month == currentMonth){
//			var channel = client.channels.find('name', 'bot-spielwiese');
//			channel.send("Alles Gute zum Geburtstag, " + birthdays[i].Name + "! :heart:");
//		}
//	}
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
	if (message.content === '!test') {
		// Send "Test bestanden." to the same channel
		message.channel.send("@" + birthdays[1].Name + 'Test bestanden.');
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

function wishesTo(name) {
	channel.send("@" + name + ", alles Gute zum Geburtstag.");
}

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
