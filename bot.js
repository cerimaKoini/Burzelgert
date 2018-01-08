var Discord = require('discord.js');
var client = new Discord.Client();

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
		Name: "Nadja",
		Day: 10,
		Month: 12
	},
	{
		Name: "Testuser",
		Day: 8,
		Month: 1
	}
];

client.on('ready', () => {
	console.log('I am ready!');
	var currentDay = new Date(Date.now()).getDate();
	var currentMonth = new Date(Date.now()).getMonth()+1;
	
	for (i = 0; i < birthdays.length; i++){
		if (birthdays[i].Day == currentDay && birthdays[i].Month == currentMonth){
			var channel = client.channels.find('name', 'bot-spielwiese');
			channel.send("Alles Gute zum Geburtstag, " + birthdays[i].Name + "! :heart:");
		}
	}
});

client.on('message', message => {
//	if (message.content === 'ping') {
//		// Send "pong" to the same channel
//		message.channel.send('pong');
//	}
//	else if (message.content === 'du sack') {
//		// Send "pong" to the same channel
//		message.channel.send('hier!');
//	}
//	else if (message.content === 'jetzt verstehen wir uns') {
//		// Send "pong" to the same channel
//		message.channel.send('klarikovsky babydoll');
//	}
//	else if (message.content === 'Wann ist mein Geburtstag?') {
//		// Send "pong" to the same channel
//		var msg = evaluateBirthday(message.author.username);
//		message.channel.send(msg);
//	}
//	else if (message.content === 'gute nacht, burzelgert') {
//		// Send "pong" to the same channel
//		message.channel.send("nachti");
//	}
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
