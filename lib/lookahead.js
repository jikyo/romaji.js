const substringOf = require('./substring');

const lookahead = (lah, src, begin) => {
  const end = begin + lah + 1;
  if (src.length < end) {
    return undefined;
  }
  const sub = substringOf(src.substring(begin, end), begin);
  if (!sub.has) {
    return undefined;
  }
  return sub;
};

module.exports = lookahead;
