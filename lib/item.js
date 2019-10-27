const itemOf = (m) => {
  return {
    map: m,
    sys: new Set(Object.keys(m)),
  };
};

module.exports = itemOf;
