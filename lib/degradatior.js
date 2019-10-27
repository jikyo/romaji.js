const ptrnOu = /ou/img;
const ptrnXtsu = /(xtsu|ltsu|ltu)(?!xtsu|ltsu|ltu)([bcdfghjklmnpqrstvwxyz])/img;

const degradate = (src) => {
  const set = new Set(src);
  src.map(
      (s) => {
        s = s.replace(ptrnOu, 'o');
        s = s.replace(ptrnXtsu, '$2$2');
        set.add(s);
      }
  );
  return Array.from(set.values());
};

module.exports = degradate;
