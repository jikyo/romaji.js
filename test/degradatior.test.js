/* eslint-env mocha */
const assert = require('assert');
const degradate = require('../lib/degradatior');

describe('degradatior', () => {
  it('should return an empty array', () => {
    assert.strictEqual((degradate([]).length), 0);
  });

  it('should return expantions with the rule for "xtsu"', () => {
    let actual;
    let expected;

    actual = degradate(['axtsuchi']).sort();
    expected = ['axtsuchi', 'acchi'].sort();
    assert.deepEqual(expected, actual);

    actual = degradate(['galtutu']).sort();
    expected = ['galtutu', 'gattu'].sort();
    assert.deepEqual(expected, actual);

    actual = degradate(['galtutu']).sort();
    expected = ['galtutu', 'gattu'].sort();
    assert.deepEqual(expected, actual);
  });

  it('should return no expantions', () => {
    let actual;
    let expected;

    actual = degradate(['axtsua']);
    expected = ['axtsua'];
    assert.deepEqual(expected, actual);

    actual = degradate(['axtui']);
    expected = ['axtui'];
    assert.deepEqual(expected, actual);

    actual = degradate(['altsuu']);
    expected = ['altsuu'];
    assert.deepEqual(expected, actual);

    actual = degradate(['altue']);
    expected = ['altue'];
    assert.deepEqual(expected, actual);

    actual = degradate(['axtsuo']);
    expected = ['axtsuo'];
    assert.deepEqual(expected, actual);

    actual = degradate(['xtsuxtsu']);
    expected = ['xtsuxtsu'];
    assert.deepEqual(expected, actual);

    actual = degradate(['altultua']);
    expected = ['altultua'];
    assert.deepEqual(expected, actual);
  });

  it('should return expantions with the rule for "ou"', () => {
    let actual;
    let expected;

    actual = degradate(['ou']).sort();
    expected = ['o', 'ou'].sort();
    assert.deepEqual(expected, actual);

    actual = degradate(['ouu']).sort();
    expected = ['ou', 'ouu'].sort();
    assert.deepEqual(expected, actual);

    actual = degradate(['ouuu']).sort();
    expected = ['ouu', 'ouuu'].sort();
    assert.deepEqual(expected, actual);

    actual = degradate(['ouuuou']).sort();
    expected = ['ouuo', 'ouuuou'].sort();
    assert.deepEqual(expected, actual);
  });

  it('should return expantions with all the rule', () => {
    const actual = degradate(['axtsuchinohougaku']).sort();
    const expected = ['axtsuchinohougaku', 'acchinohogaku'].sort();
    assert.deepEqual(expected, actual);
  });
});
