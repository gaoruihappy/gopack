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
  command = require('./command/start');
  command = command.default
}catch(e){
  command = require("./command/help").default
}
argv.cwd = process.cwd();
command(argv);