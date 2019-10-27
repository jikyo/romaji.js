const lookahead = require('./lookahead');
const romajis = require('./transliteration');
const substringOf = require('./substring');

const romaji = (src) => {
  if (!src) {
    return [];
  }

  const lookahead0 = romajis();
  const lookahead1 = romajis();

  for (let i = 0; i < src.length; i++) {
    lookahead1.tryToAppend(lookahead(1, src, i));
    const sub = substringOf(src.substring(i, i + 1), i);
    lookahead1.tryToAppend(sub);
    lookahead0.tryToAppend(sub);
  }

  const res = new Set();
  lookahead0.values().forEach((r) => {
    res.add(r);
  });
  lookahead1.values().forEach((r) => {
    res.add(r);
  });
  res.delete(src);
  return Array.from(res).sort();
};

module.exports = romaji;
