import defaultConf from '../config/webpack.config.default.js'
import path from 'path'
var fs = require('fs'); 

export default ()=>{
 let nowPath = path.join(process.cwd(),'/webpack.config.js')
 let projectConf = require(String(nowPath))
 //FIXME
 let effectiveConf = Object.assign(defaultConf,projectConf);
 console.log(effectiveConf)
}
