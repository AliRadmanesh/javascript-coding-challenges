/*
  Task: Calculate the number of days betwen two given dates (in MM/DD/YYYY)
  Input:
    const date1 = "04/16/2022"
    const date2 = "01/07/2022"
  Output:
    const output = 98
*/

const date1 = "04/16/2022";
const date2 = "01/07/2022";

/*
  Solution: Using JavaScript's "Date" objects
  JavaScript "Date" objects represent a single moment in time in a platform-independent format.
  ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
const findDaysBetween = (date1, date2) => {
  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);
  const timeBetweenInMilli = newDate1.getTime() - newDate2.getTime();
  const daysBetween = Math.ceil(timeBetweenInMilli / (1000 * 3600 * 24));
  return daysBetween;
};

const output = findDaysBetween(date1, date2);
console.log(output);
