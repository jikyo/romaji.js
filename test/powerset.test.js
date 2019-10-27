/* eslint-env mocha */
const assert = require('assert');
const powerset = require('../lib/powerset');

describe('powerset', () => {
  it('should return all subsets', () => {
    const actual = powerset([0, 1, 2]).sort();
    const expect = [
      [0],
      [1],
      [2],
      [0, 1],
      [0, 2],
      [1, 2],
      [0, 1, 2],
    ].sort();
    assert.deepEqual(actual, expect);
  });

  it('should return an empy array', () => {
    const actual = powerset([]);
    const expect = [];
    assert.deepEqual(actual, expect);
  });
});
