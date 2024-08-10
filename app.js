const axios = require('axios');
const cron = require('node-cron');

let count=0;
// Function to make the HTTP request
const makeRequest = async () => {
  try {
    count = count+1;
    const response = await axios.get('https://no-log-store.onrender.com/');
    console.log(`Request Number ${count} succeeded with status: ${response.status}`);
  } catch (error) {
    console.log(`Error making request Number ${count} :`, error.message);
  }
};

// Schedule the task to run every 14 minutes
cron.schedule('*/14 * * * *', () => {
  console.log('Making request...');
  makeRequest();
});

// Initial request when the server starts
makeRequest();
