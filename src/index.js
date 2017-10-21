/**
 * @description
 * @date  2016/11/17.
 */
var optimist= require('optimist');

var argv = optimist.argv

var commands = argv._;
var command = false;
// FIXME 加命令校验
try{
	console.log(1)

  command = require("./command/"+commands[0]);
  command = command.default
	console.log(3)

}catch(e){
	console.log(e)
  command = require("./command/help").default
}
argv.cwd = process.cwd();

command(argv);