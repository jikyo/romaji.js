/* eslint-env mocha */
const assert = require('assert');
const lookahead = require('../lib/lookahead');
const rewrite = require('rewire');
const substringOf = require('../lib/substring');
const Sys = require('../lib/sys');
const romajis = require('../lib/transliteration');
const transliteration = rewrite('../lib/transliteration.js');

describe('transliteration', () => {
  describe('append', () => {
    it('should append undefined', () => {
      const r = romajis('');
      r.tryToAppend(undefined);
      assert.deepEqual([], r.values());
    });

    it('should append non match char', () => {
      const r = romajis('');
      const sub = lookahead(1, 'よじょうはん', 0);
      r.tryToAppend(sub);
      assert.deepEqual([], r.values());
    });
  });

  describe('findSys', () => {
    it('should find the sys', () => {
      const findSys = transliteration.__get__('findSys');
      const sub = substringOf('っ', 0);
      assert.equal(Sys.L, findSys(sub, sub.sys));

      const actual = findSys(sub, new Set([Sys.STD, Sys.LNG]));
      assert.equal(Sys.LNG, actual);
    });
  });

  describe('substringToRomaji', () => {
    it('should return a romaji from the substring', () => {
      const substringToRomaji = transliteration.__get__('substringToRomaji');
      const sub = substringOf('っ', 0);

      let systems;

      systems = new Set([Sys.STD, Sys.LNG]);
      assert.equal('ltsu', substringToRomaji(sub, systems));

      systems = new Set([Sys.STD, Sys.L]);
      assert.equal('ltu', substringToRomaji(sub, systems));

      systems = new Set([Sys.STD]);
      assert.equal('xtu', substringToRomaji(sub, systems));

      systems = new Set([Sys.STD, Sys.Y]);
      assert.equal('xtu', substringToRomaji(sub, systems));
    });
  });

  describe('romaji', () => {
    it('should find the romaji', () => {
      const romaji = transliteration.__get__('romaji');

      const src = 'あっち';
      const subs = [
        lookahead(0, src, 0),
        lookahead(0, src, 1),
        lookahead(0, src, 2),
      ];

      let systems;

      systems = new Set([Sys.STD, Sys.LNG]);
      assert.equal('altsuchi', romaji(subs, systems));

      systems = new Set([Sys.STD, Sys.Y]);
      assert.equal('axtuti', romaji(subs, systems));

      systems = new Set([Sys.STD]);
      assert.equal('axtuti', romaji(subs, systems));
    });
  });

  describe('romajis', () => {
    it('should find the romajis', () => {
      const src = 'アッチ';
      const r = romajis();
      r.tryToAppend(lookahead(0, src, 0));
      r.tryToAppend(lookahead(0, src, 1));
      r.tryToAppend(lookahead(0, src, 2));

      const expect = [
        'axtuti',
        'altuti',
        'altsuchi',
        'altuchi',
        'atti',
        'acchi',
      ];
      assert.deepEqual(expect.sort(), r.values().sort());
    });
  });
});
