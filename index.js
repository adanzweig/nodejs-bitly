// Load environment variables from .env file
require('dotenv').config();

// Import axios for making HTTP requests
const axios = require('axios');

// Define an asynchronous function to shorten a given link using the Bitly API
async function shortenLink(link){
    try{
        // Make a POST request to the Bitly API to create a short link
        const response = await axios.post(`https://api-ssl.bitly.com/v4/shorten`,{
            "long_url":link // Include the long URL in the request body
        },{
            headers:{
                'Authorization':`Bearer ${process.env.ACCESS_TOKEN}` // Use the access token from environment variables for authorization
            }
        });
        return response.data; // Return the response data containing the short link
    }catch(error){
        // Log any errors that occur during the API call
        console.error('error', error);
    }
}

// Self-invoking asynchronous function to execute the link shortening
(async()=>{
    // Shorten a specific URL and store the result
    const url = await shortenLink(`https://www.youtube.com/@CodingWithAdo`);
    // Output the result to the console
    console.log(url);
})();
