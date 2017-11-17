import path from 'path'
var fs = require('fs'); 
import conf from '../service/conf.js'
// module.exports = function(){
// 	console.log('start')
// 	const contentPath = path.join(process.cwd(),'/package.json')
// 	console.log(contentPath)
// 	fs.readFile(contentPath,{charset:'utf-8'},function(a,b){
// 		console.log(b)
// 	})
// }
var optimist= require('optimist');
export default (args)=>{
	var argv = optimist.argv
	// console.log(argv)
	conf(args)
}