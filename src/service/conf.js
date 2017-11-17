import defaultConf from '../config/webpack.config.default.js'
import path from 'path'
var fs = require('fs'); 
var webpack = require('webpack')

var WebpackDevServer = require("webpack-dev-server");

export default ()=>{
	let nowPath = path.join(process.cwd(),'/webpack.config.js')
	// let projectPath = path.join(process.cwd(),'/config.js')
	let projectConf = require(String(nowPath))(defaultConf)
	// let projectParamsConf = require(String(nowConfigPath))

	//FIXME
	// console.log(effectiveConf)
	console.log("projectConf")
	console.log(projectConf)
	var compiler = webpack(projectConf);
	var server = new WebpackDevServer(compiler, {
	hot               : true,//注意这里，你已经开启了hot模式，她和你手动加载HotModuleReplacementPlugin是一个意思，所有你后面再手动加一个就没意义了
	noInfo            : true,
	historyApiFallback: true,
	inline:    true        

	});
	server.listen(7007,'127.0.0.1');
}
