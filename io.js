const input = require('readline-sync');
const msg = require('./msg.js');

/** CLEAR **/
function clear()
{
	for(var i = 0; i < 20; i++)
		out("\n");
}
/************/
	
/** OUT **/
function out(s) { console.log(s); }
/**********/	
	
/** MENU **/
const pattern = "▣";
const size = 20;
function menu(name,options)
{
	clear();
	
	var header = pattern.repeat(size) + " " + name + " " + pattern.repeat(size);
	out(header);
	
	showOptions(options);
	
	var footer = pattern.repeat(2*size+2+name.length);
	out(footer);

	ask(name,options);
}

// Apresentação das opções selecionáveis
function showOptions(options)
{
	var i;
	for(i = 1; i <= options.length; i++)
	{ out(i + ") " + options[i-1]["label"]); }
	out("0) "+msg.exit);
}
function getin(message)
{
	return input.question(message);
}
function pause(isInvalid)
{
	getin(msg.pause);
}	
function ask(name,options)
{
	var opc = Number(getin(msg.ask));

	if(opc != NaN && opc >= 0 && opc <= options.length)
	{	
		switch (opc)
		{
			case 0:
				return;
			default:
				options[opc-1]["action"]();
				pause();
				break;
		}
	}
	else
	{	
		out(msg.invalid+"\n");
		pause();
	}
	
	menu(name,options);
}

module.exports.clear = clear;
module.exports.out = out;
module.exports.menu = menu;
module.exports.getin = getin;
module.exports.pause = pause;
