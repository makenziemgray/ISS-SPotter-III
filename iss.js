const { fetchISSFlyOverTimes } = require('./iss');

// Example coordinates
const coords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error.message);
    return;
  }

  console.log("It worked! Returned flyover times:", passTimes);
});