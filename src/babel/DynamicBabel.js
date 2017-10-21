/**
 * @description
 * @date  2017/8/31.
 */
/**
 * 所有在这个文件里面的 System.Import 替换为其他文案
 * @param babel
 * @returns {{}}
 */
module.exports = function(babel){
    const bodyTraverse = {
        CallExpression(path){
            // check is system.import
            let obejct = path.node.callee ? path.node.callee.object : null
            if(obejct && obejct.name=='System'){
                const property =  path.node.callee.property
                if(property && property.name == 'import'){
                    const value = path.node.arguments[0].value
                    const code = `__webpack_name_chunk__('${value}')`
                    path.replaceWithSourceString(code)
                }
            }
        }
    }
    const methods = [
        'FunctionDeclaration',
        'ObjectMethod',
        'ClassMethod',
        'FunctionExpression',
        'ArrowFunctionExpression',
    ];
    const visitor = {}
    methods.forEach((method) =>{
        visitor[method] = function(path,state){
            if(this.opts.script == this.file.parserOpts.sourceFileName){
                path.traverse(bodyTraverse)
            }
        }
    })
    return {
        visitor:visitor
    };
}
