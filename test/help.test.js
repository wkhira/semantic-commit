const test = require('ava')
const help = require('../src/help')

test('Help é uma função', t => {
  let fn = typeof help
  let result = 'function'

  t.is(fn, result);
})