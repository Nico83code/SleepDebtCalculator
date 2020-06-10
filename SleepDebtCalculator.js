// const getSleepHours = day => {
//   if (day === 'monday') {
//       return 8;
//   }
//   else if (day === 'tuesday') {
//         return 8;
//     }
//    else if (day === 'wednesday') {
//         return 8;
//     }
//   else if  (day === 'thursday') {
//         return 8;
//     }
// else if (day === 'friday') {
//         return 8;
//     }
//  else if (day === 'saturday'){
//     return 8;
// }
// else (day === 'sunday') {
//     return 8;
// }

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 6;
      break;
    case "sunday":
      return 15;
      break;
    default:
      return "Error";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

console.log(getSleepHours("monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDent = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You've got " +
        (idealSleepHours - actualSleepHours) +
        " more hours sleep this week"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest because you've slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than you should have this week."
    );
  } else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDent();
