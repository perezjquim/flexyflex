/*******************************/
/** IMPORTED LIBRARIES **/
/*******************************/
const io = require("./io.js");
/*******************************/

/**************************************/
/** MENUS AVAILABLE FOR USE **/
/**************************************/
module.exports.main =
[ 
	{
		label: "Random number generator",
		action: () =>
		{
			io.out("Random number generated: "+Math.random());
		}
	},
	{
		label: "Guess-a-guess",
		action: () =>
		{
			const high = 5;
			const low = 1;		
			io.out("The objective of this game is to guess a number that's between " + low + " and " + high);

			var solution = Math.floor(Math.random() * (high - low) + low);
			
			while(io.getin("Pick a number between " + low + " and " + high + ": ") != solution);
			
			io.out("YOU GOT IT!");
		}
	},
	{
		label: "Small talk with a dumb bot",
		action: () =>
		{
			io.menu("BOT",bot);
		}
	} 
];
module.exports.bot =
[
	{
		label: "Hi",
		action: () =>
		{
			io.out("Hi babe");
		}
	},
	{
		label: "Hola",
		action: () =>
		{
			io.out("Hola, como estas?");
		}
	},
	{
		label: "Hello",
		action: () =>
		{
			io.out("Hello darling");
		}
	}
];
/**************************************/
