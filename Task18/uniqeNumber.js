const uniqueOccurrences = (arr) => {
    const obj = {};

    arr.forEach(number => {
      if(number in obj) {
        obj[number]++;
      } else {
        obj[number] = 1;
      }
    });

    const occurrences = Object.values(obj);
    const uniqueOccurrences = new Set(occurrences);

    return occurrences.length === uniqueOccurrences.size;
};