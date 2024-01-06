const uuid = require('uuid'); // Make sure to install uuid by running: npm install uuid

// Function to generate a random string
function generateRandomString() {
  return uuid.v4();
}

// Function to format the current timestamp
function getCurrentTimestamp() {
  return new Date().toISOString();
}

// Function to log the random string with timestamp
function logRandomString() {
  const randomString = generateRandomString();
  const timestamp = getCurrentTimestamp();
  console.log(`${timestamp}: ${randomString}`);
}

// Initial log on startup
logRandomString();

// Set interval to log every 5 seconds
setInterval(() => {
  logRandomString();
}, 5000);
