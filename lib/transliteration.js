const degradate = require('./degradatior');
const powerset = require('./powerset');
const Sys = require('./sys');

const findSys = (sub, systems) => {
  const system = ([...systems])
      .sort()
      .reverse()
      .find((s) => (s !== Sys.STD && sub.romaji.map[s] !== undefined));
  return (system === undefined) ?
    Sys.STD:
    system;
};

const substringToRomaji = (sub, systems) => {
  return sub.has ?
    sub.romaji.map[findSys(sub, systems)] :
    sub.src;
};

const romaji = (substrings, systems) => {
  return substrings
      .map((sub) => {
        return substringToRomaji(sub, systems);
      })
      .reduce((pre, cur) => {
        return pre + cur;
      }, '');
};

const romajis = (src) => {
  const transliteration = {
    index: 0,
    substrings: [],
    sys: new Set(),
  };

  transliteration.tryToAppend = (sub) => {
    if (sub === undefined) {
      return;
    }
    if (sub.index !== transliteration.index) {
      return;
    }
    transliteration.substrings.push(sub);
    sub.sys.forEach((item) => {
      transliteration.sys.add(item);
    });
    transliteration.index += sub.window;
  };

  transliteration.values = () => {
    if (transliteration.substrings.length === 0) {
      return [];
    }
    return degradate(powerset([...transliteration.sys])
        .map((systems) => {
          return romaji(transliteration.substrings, systems);
        })
        .reduce((pre, cur) => {
          pre.push(cur);
          return pre;
        }, []));
  };

  return transliteration;
};

module.exports = romajis;
