const assert = require('node:assert/strict');

assert.equal(
  /^[\p{Script=Arabic}&&\p{Number}]$/v.test('٣'), true // OK
);
assert.equal(
  /^[\p{Script=Arabic}&&\p{Number}]$/v.test('ق'), true // not OK
);

assert.equal(
  /[\p{ASCII}&&\p{Decimal_Number}]/v.test('4'), true // OK
);
assert.equal(
  /[\p{ASCII}&&\p{Decimal_Number}]/v.test('X'), true // not OK
);
