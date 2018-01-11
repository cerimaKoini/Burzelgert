var Discord = require('discord.js');
var client = new Discord.Client();
var cron = require('cron');

var birthdays = [
	{
		UserId: "219918618278756352", //kerry
		Cron: '0 8 4 0 *',
		Day: 4,
		Month: 1
	},
	{
		UserId: "271315484043902986", //sonnus
		Cron: '0 8 12 1 *',
		Day: 12,
		Month: 2
	},
	{
		UserId: "241198387918143489", //sambin
		Cron: '0 8 13 1 *',
		Day: 13,
		Month: 2
	},
	{
		UserId: "234956498151669761", //roland
		Cron: '0 8 22 1 *',
		Day: 22,
		Month: 2
	},
	{
		UserId: "270162981201903618", //darthod
		Cron: '0 8 12 2 *',
		Day: 12,
		Month: 3
	},
	{
		UserId: "243432332881690634", //hyean
		Cron: '0 8 20 2 *',
		Day: 20,
		Month: 3
	},
	{
		UserId: "242956992153387009", //macgoon
		Cron: '0 8 8 5 *',
		Day: 8,
		Month: 6
	},
	{
		UserId: "240401136706650112", //sabios
		Cron: '0 8 22 6 *',
		Day: 22,
		Month: 7
	},
	{
		UserId: "233262609359437825", //nina
		Cron: '0 8 12 8 *',
		Day: 12,
		Month: 9
	},
	{
		UserId: "239762961567186954", //micha
		Cron: '0 8 10 9 *',
		Day: 10,
		Month: 10
	},
	{
		UserId: "238331275923030017", //pigwedgon
		Cron: '0 8 10 11 *',
		Day: 10,
		Month: 12
	}
];


var testdates = [
	{
		UserId: "219918618278756352",
		Cron: '0 8 11 0 *',
		Day: 10,
		Month: 12
	},
	{
        	UserId: "219918618278756352",
		Cron: '15 5 11 0 *',
		Day: 10,
		Month: 12
	},
	{
        	UserId: "219918618278756352",
		Cron: '55 4 11 0 *',
		Day: 10,
		Month: 12
	},
	{
        	UserId: "219918618278756352",
		Cron: '50 4 11 0 *',
		Day: 10,
		Month: 12
	}
];


client.on('ready', () => {
	var channel = client.channels.find('name', 'bot-spielwiese');
	channel.send('Burzelgert initialized. Waiting for commands.');
	channel.send('Creating schedule for cottonballs\' birthdays.');
    
	for (i = 0; i < testdates.length; i++){
		// Creating a new job
		var job = new cron.CronJob({
			cronTime: testdates[i].Cron,
			onTick: function() {
				channel.send(testdates[i].UserId + ", alles Gute zum Geburtstag! :LiebeLiebe:");
			},
			start: false
		});
		job.start();
		channel.send("Job " + i + " started.");
	}
	
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
		message.channel.send("Command detected. Test me.");
	}
	else if (message.content === '!geburtstage') {
		// Send an embedded list of all birthdays to the same channel
        	message.channel.send("Command detected. Fetching cottonballs\' birthdays.");
		var lines = "";
		for (i = 0; i < testdates.length; i++){
			lines += "<@" + testdates[i].UserId + "> - " + testdates[i].Day + "." + testdates[i].Month + ".\n";
		}
		message.channel.send({embed: {
			color: 15105570, //orange
			title: "Hier siehst du die Geburtstage der Wättebällchen im Überblick:",
		    	description: lines
		}});
        	console.log(lines);
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
