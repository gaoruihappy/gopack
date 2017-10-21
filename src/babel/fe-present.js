/**
 * @description
 * @date  2017/6/13.
 */

// const DynamicBabel  = require('./DynamicBabel')

module.exports = function(option){
  option = option || {}

  return {
    plugins: [
      require('babel-plugin-transform-decorators-legacy').default,
      require('babel-plugin-transform-class-properties'),
      require('babel-plugin-transform-es2015-duplicate-keys'),
      [require('babel-plugin-transform-es2015-template-literals'), {loose: true}],
      require('babel-plugin-transform-es2015-literals'),
      require('babel-plugin-transform-es2015-function-name'),
      require('babel-plugin-transform-es2015-arrow-functions'),
      require('babel-plugin-transform-es2015-block-scoped-functions'),
      [require('babel-plugin-transform-es2015-classes'), {loose: true}],
      require('babel-plugin-transform-es2015-object-super'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      [require('babel-plugin-transform-es2015-computed-properties'), {loose: true}],
      [require('babel-plugin-transform-es2015-for-of'), {loose: true}],
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-unicode-regex'),
      require('babel-plugin-check-es2015-constants'),
      [require('babel-plugin-transform-es2015-spread'), {loose: true}],
      require('babel-plugin-transform-es2015-parameters'),
      [require('babel-plugin-transform-es2015-destructuring'), {loose: true}],
      require('babel-plugin-transform-es2015-block-scoping'),
      require('babel-plugin-transform-es2015-typeof-symbol'),
      require('babel-plugin-transform-async-to-generator'),
      require('babel-plugin-transform-exponentiation-operator'),
      require('babel-plugin-syntax-trailing-function-commas'),
      require('babel-plugin-transform-object-rest-spread'),
      require('babel-plugin-transform-class-constructor-call'),
      require('babel-plugin-transform-decorators'),
      require('babel-plugin-transform-export-extensions'),
      require('babel-plugin-transform-do-expressions'),
      require('babel-plugin-transform-function-bind'),
      require('babel-plugin-transform-react-jsx'),
      require('babel-plugin-transform-flow-strip-types'),
      require('babel-plugin-syntax-flow'),
      require('babel-plugin-syntax-jsx'),
      require('babel-plugin-transform-react-display-name'),
      require('babel-plugin-syntax-async-functions'),
      require('babel-plugin-empower-assert'),
      require('babel-plugin-espower'),
      // Remove webpack2 supports it already
      [require('babel-plugin-transform-es2015-modules-commonjs'),{
        strictMode:typeof option.strictMode != 'undefined' ? option.strictMode : true
      }],
      [require('babel-plugin-transform-runtime'),{
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime'
      }],
      [require('babel-plugin-transform-regenerator')]
    ]
  }

}
