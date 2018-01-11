var Discord = require('discord.js');
var client = new Discord.Client();
var cron = require('cron');

var birthdays = [
	{
		UserId: "219918618278756352", //kerry
		Cron: '0 8 4 1 *',
		Day: 4,
		Month: 1
	},
	{
		UserId: "219918618278756352", 
		Cron: '5 1 11 1 *',
		Day: 12,
		Month: 2
	},
	{
		UserId: "271315484043902986", //sonnus
		Cron: '0 8 12 2 *',
		Day: 12,
		Month: 2
	},
	{
		UserId: "241198387918143489", //sambin
		Cron: '0 8 13 2 *',
		Day: 13,
		Month: 2
	},
	{
		UserId: "234956498151669761", //roland
		Cron: '0 8 22 2 *',
		Day: 22,
		Month: 2
	},
	{
		UserId: "270162981201903618", //darthod
		Cron: '0 8 12 3 *',
		Day: 12,
		Month: 3
	},
	{
		UserId: "243432332881690634", //hyean
		Cron: '0 8 20 3 *',
		Day: 20,
		Month: 3
	},
	{
		UserId: "242956992153387009", //macgoon
		Cron: '0 8 8 6 *',
		Day: 8,
		Month: 6
	},
	{
		UserId: "240401136706650112", //sabios
		Cron: '0 8 22 7 *',
		Day: 22,
		Month: 7
	},
	{
		UserId: "233262609359437825", //nina
		Cron: '0 8 12 9 *',
		Day: 12,
		Month: 9
	},
	{
		UserId: "239762961567186954", //micha
		Cron: '0 8 10 10 *',
		Day: 10,
		Month: 10
	},
	{
		UserId: "238331275923030017", //pigwedgon
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
	var job1 = new cron.CronJob({
		cronTime: '00 30 1 11 00 *',
		onTick: function () {
			var channel = client.channels.find('name', 'bot-spielwiese');
			channel.send("<@219918618278756352>, alles Gute zum Geburtstag.");
		},
		start: false
	});
	job1.start();
	
	
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
		message.channel.send("<@" + birthdays[1].UserId + '>: Test bestanden.');
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

//function wishesTo(name) {
//	channel.send("@" + name + ", alles Gute zum Geburtstag.");
//}

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
