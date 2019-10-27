const itemOf = require('./item');
const Mapping = require('./mapping');

const substringOf = (src, index) => {
  const romaji = Mapping[src] ? itemOf(Mapping[src]) : undefined;
  return {
    index: index,
    window: src.length,
    src: src,
    romaji: romaji,
    has: (romaji !== undefined),
    sys: (romaji) ? romaji.sys : new Set(),
  };
};

module.exports = substringOf;
