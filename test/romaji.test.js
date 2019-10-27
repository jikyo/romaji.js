/* eslint-env mocha */
const assert = require('assert');
const romaji = require('../lib/romaji');

describe('romaji', () => {
  it('should output the romajis of "きょうと"', () => {
    assert.deepEqual(romaji('きょうと'), [
      'kilyoto',
      'kilyouto',
      'kixyoto',
      'kixyouto',
      'kyoto',
      'kyouto',
    ]);
  });

  it('should output the romajis of "トッキョ"', () => {
    assert.deepEqual(romaji('トッキョ'), [
      'tokkilyo',
      'tokkixyo',
      'tokkyo',
      'toltsukixyo',
      'toltsukyo',
      'toltukilyo',
      'toltukyo',
      'toxtukixyo',
      'toxtukyo',
    ]);
  });

  it('should output the romajis of "ドラえもん"', () => {
    assert.deepEqual(romaji('ドラえもん'), [
      'doraemon',
      'doraemon\'',
      'doraemonn',
    ]);
  });

  it('should output the romajis of "っっっっっ"', () => {
    assert.deepEqual(romaji('っっっっっ'), [
      'ltsultsultsultsultsu',
      'ltultultultultu',
      'xtuxtuxtuxtuxtu',
    ]);
  });

  it('should output an empty array for "東京都&123ABC"', () => {
    assert.deepEqual(romaji('東京都&123ABC'), []);
  });

  it('should output the romajis of "お茶の水"', () => {
    assert.deepEqual(romaji('お茶の水'), ['o茶no水']);
  });
});
