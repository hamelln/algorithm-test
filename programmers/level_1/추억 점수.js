function solution(name, yearning, photo) {
  const nameYearingObject = yearning.reduce((acc, point, index) => {
    acc[name[index]] = point;
    return acc;
  }, {});

  const calcNameToYearing = (name) => {
    if (name in nameYearingObject) {
      return nameYearingObject[name];
    }
    return 0;
  };

  const calcPhotoToYearning = (names) => {
    return names.reduce((sum, name) => sum + calcNameToYearing(name), 0);
  };

  const result = photo.map(calcPhotoToYearning);
  return result;
}
