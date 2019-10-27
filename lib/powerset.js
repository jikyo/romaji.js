const equlas = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const uniq = (arr) => {
  const tmp = [];
  for (let i = 0; i < arr.length; i++) {
    let exsits = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (equlas(arr[i], arr[j])) {
        exsits = true;
        break;
      }
    }
    if (!exsits) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
};

const powerset = (src) => {
  if (src.length === 0) {
    return [];
  }
  const power = [src];
  src.forEach((item) => {
    powerset(
        src.filter((i) => {
          return (item !== i);
        })
    ).filter((element) => {
      return typeof element.forEach === 'function';
    }).filter((element) => {
      return element.length !== 0;
    }).map((element) => {
      power.push(element);
    });
  });
  return uniq(power);
};

module.exports = powerset;
