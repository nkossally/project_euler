const MONTH_DAY_COUNTS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const countSundays = () => {
  // 1 jan 1900 mon
  // 1 Jan 1901 tues
  // let sunday be 0
  let count = 0;
  let day = 2;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      if (day === 0) {
        count++;
      }
      if (month === 1 && year % 4 && (year % 400 || !(year % 100))) {
        day += 28;
      } else {
        day += MONTH_DAY_COUNTS[month];
      }
      day = day % 7;
    }
  }
  return count;
};

console.log(countSundays())