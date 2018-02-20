/*******************************/
/** IMPORTED LIBRARIES **/
/*******************************/
const input = require('readline-sync');
const msg = require('./messages.conf');
const layout = require('./layout.conf');
/*******************************/

/*********************/
/** GENERAL I/O **/
/*********************/
function clear()
{
	// "Clears" the screen
	for(var i = 0; i < layout.clear_size; i++)
	{ out("\n"); }
}
function getin(message)
{
	// Asks the user for some info
	return input.question(message);
}
function pause()
{
	// Waits until 'ENTER' is pressed to continue execution
	getin(msg.pause);
}	
function out(s) 
{ 
	// Shorter function to write output to console
	console.log(s); 
}
/*********************/

/************/
/** MENU **/
/************/
function menu(name,options)
{
	// Clears the screen
	clear();
	
	// Writes the header of the menu
	var header = layout.pattern.repeat(layout.size) + " " + name + " " + layout.pattern.repeat(layout.size);
	out(header);
	
	// Shows all the available options in this menu
	showOptions(options);
	
	// Writes the footer of the menu
	var footer = layout.pattern.repeat(2*layout.size+2+name.length);
	out(footer);

	// Asks the user to choose some option
	ask(name,options);
}
function showOptions(options)
{
	// Writes all the avaiable options to the console
	for(i = 1; i <= options.length; i++)
	{ out(i + ") " + options[i-1]["label"]); }
	
	// Shows the 'exit' option
	out("0) "+msg.exit);
}
function ask(name,options)
{
	// Gets user's selection
	var opc = Number(getin(msg.ask));

	// If it is a valid selection
	if(opc != NaN && opc >= 0 && opc <= options.length)
	{	
		switch (opc)
		{
			// 'Exit' option
			case 0:
				return;
				
			// Any other valid option
			default:
				
				// Executes the option's action
				options[opc-1]["action"]();
				break;
		}
	}
	
	// If it is a invalid selection
	else
	{	
		// It is shown an error message
		out(msg.invalid+"\n");
	}
	
	// Pauses the execution
	pause();
	
	// Goes back to the same menu
	menu(name,options);
}
/************/

/*****************************/
/** EXPORT FUNCTIONS **/
/*****************************/
module.exports.clear = clear;
module.exports.out = out;
module.exports.menu = menu;
module.exports.getin = getin;
module.exports.pause = pause;
