const input = require('readline-sync');
const msg = require('./messages.conf');
const layout = require('./layout.conf');

/** I/O GERAL **/
function clear()
{
	for(var i = 0; i < layout.clear_size; i++)
		out("\n");
}
function getin(message)
{
	return input.question(message);
}
function pause()
{
	getin(msg.pause);
}	
function out(s) { console.log(s); }
/************/

/** MENU **/

function menu(name,options)
{
	clear();
	
	var header = layout.pattern.repeat(layout.size) + " " + name + " " + layout.pattern.repeat(layout.size);
	out(header);
	
	showOptions(options);
	
	var footer = layout.pattern.repeat(2*layout.size+2+name.length);
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
				break;
		}
	}
	else
	{	
		out(msg.invalid+"\n");
	}
	
	pause();
	menu(name,options);
}

module.exports.clear = clear;
module.exports.out = out;
module.exports.menu = menu;
module.exports.getin = getin;
module.exports.pause = pause;
