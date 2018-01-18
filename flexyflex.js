/** BIBLIOTECAS **/
const io = require("./io.js");
/*********************/

/** MENU PRINCIPAL **/
const mprincipal = 
[ 
	{
		label: "Geração de um número aleatório",
		action: () =>
		{
			io.out("Número aleatório: "+Math.random());
		}
	},
	{
		label: "Guess-a-guess",
		action: () =>
		{
			const high = 5;
			const low = 1;		
			io.out("O objetivo é acertar num número determinado aleatoriamente entre " + low + " e " + high);

			var solution = Math.floor(Math.random() * (high - low) + low);
			
			while(io.getin("Introduza um número entre 1 e 5: ") != solution);
			
			io.out("Acertaste!");
		}
	},
	{
		label: "Diálogo com um bot",
		action: () =>
		{
			io.menu("BOT",bot);
		}
	} 
];
const bot =
[
	{
		label: "Olá",
		action: () =>
		{
			io.out("Olá bebé");
		}
	},
	{
		label: "Oi",
		action: () =>
		{
			io.out("Oi, tb?");
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
/************************/
/************************/
/************************/
/************************/
/************************/
/************************/
/************************/
io.menu("MENU PRINCIPAL",mprincipal);
