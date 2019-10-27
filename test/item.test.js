/* eslint-env mocha */
const assert = require('assert');
const itemOf = require('../lib/item');
const Sys = require('../lib/sys');

describe('item', () => {
  it('should have the get and system method', () => {
    const map = {
      [Sys.STD]: 'zya',
      [Sys.SRT]: 'ja',
      [Sys.LNG]: 'jya',
    };

    const i = itemOf(map);
    assert.deepEqual(i.map, map);

    const expect = new Set([Sys.STD, Sys.SRT, Sys.LNG]);
    assert.deepEqual(i.sys, expect);

    assert.equal(i.map[Sys.STD], 'zya');
    assert.equal(i.map[Sys.L], undefined);
  });
});
