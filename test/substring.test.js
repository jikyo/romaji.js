/* eslint-env mocha */
const assert = require('assert');
const lookahead = require('../lib/lookahead');
const Sys = require('../lib/sys');

describe('substring', () => {
  it('should lookahead to the input string "ヨジョウはん"', () => {
    const src = 'ヨジョウはん';
    let sub;

    sub = lookahead(2, src, 0);
    assert.equal(sub, undefined);

    sub = lookahead(0, src, 2);
    assert.notEqual(sub, undefined);
    assert.equal(2, sub.index);
    assert.equal(1, sub.window);
    assert.equal('ョ', sub.src);
    assert.equal(true, sub.has);
    assert.deepEqual(new Set([Sys.STD, Sys.L]), sub.sys);

    sub = lookahead(1, src, 1);
    assert.notEqual(sub, undefined);
    assert.equal(1, sub.index);
    assert.equal(2, sub.window);
    assert.equal('ジョ', sub.src);
    assert.equal(true, sub.has);
    const expect = new Set([Sys.STD, Sys.SRT, Sys.LNG]);
    assert.deepEqual(expect, sub.sys);

    sub = lookahead(1, src, 5);
    assert.equal(sub, undefined);

    sub = lookahead(0, src, 6);
    assert.equal(sub, undefined);
  });
});
