let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 36;

if (runnerAge > 18 && earlyRegister) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log(`Starting time for your number (${raceNumber}) is 9:30 am.`);
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(`Starting time for your number (${raceNumber}) is 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Starting time for your number (${raceNumber}) is 12:30 pm.`);
} else {
  console.log(`Please clarify with the contact desk.`);
}
