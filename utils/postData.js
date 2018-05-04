'use strict'

/* postData.js
 * Chase Sawyer
 * University of Washington, 2018
 * 
 * Posts data back to Slack using the special URL generated/sent from the slash command.
 */

const axios = require('axios')

/**
 * Axios POST wrapper. Takes the formatted slack data and posts it to Slack using 
 * the original response URL.
 * @param {JSON} scheduleData Formatted JSON to post into Slack
 * @param {String} responseUrl Url to respond to Slack
 */
function postData(scheduleData, responseUrl) {
  axios.post(
    responseUrl,
    scheduleData,
    { //configuration
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}

module.exports = {
  postData
}