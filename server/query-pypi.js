const axios = require('axios');
const schedule = require('node-schedule');

const apiKey = 'b3e2abe43a29dcfbc9cbfa3e6692c569';

const queryOptions = {
  q: 'python',
  api_key: apiKey,
  sort: 'rank',
  languages: 'English',
  platforms: 'pypi',
};

// Define the schedule for 6am, 8am, 10am, 12pm, 2pm, and 4pm, Monday to Friday
const jobSchedule = '0 6,8,10,12,14,16 * * 1-5';

// Schedule the job
schedule.scheduleJob(jobSchedule, function () {
  console.log('Performing scheduled API request');

  axios
    .get('https://libraries.io/api/search', { params: queryOptions })
    .then((response) => {
      // Handle the response as needed
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error performing API request:', error);
    });
});

console.log('Scheduled API requests set up');

module.exports = { jobSchedule, schedule };
