var nx = require('next-js-core2');
require('../src/next-str2ucode');

test('nx.str2ucode', function() {
  var str1 = 'A';
  var rs = nx.str2ucode(str1);

  expect(str1 === rs).toBe(false);
  expect(rs.length).toBe(3)
});
