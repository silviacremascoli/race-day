let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 25;

if (runnerAge > 18 && earlyRegister) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log(`Starting time for your number (${raceNumber}) is 9:30 am.`);
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(`Starting time for your number (${raceNumber}) is 11:00 am.`);
}
