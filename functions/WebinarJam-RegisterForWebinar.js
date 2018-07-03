exports.handler = function(event, context, callback) {
    const https = require('https');
    const {
        webinar_id,
        first_name,
        last_name,
        email,
        schedule
    } = event.queryStringParameters;

    console.log(event.queryStringParameters);

    const body = {
        apiKey: process.env.WEBINAR_JAM_API_KEY || '',
        webinarId: webinar_id,
        firstName: first_name,
        lastName: last_name,
        email: email,
        schedule: schedule
    }

    // Throw error if body doesn't have required fields
    if (!(
        webinar_id &&
        first_name &&
        email &&
        schedule
    )) {
        console.log(body);
        return callback("Request did not contain required fields", {
            statusCode: 400
        });
    }

    const options = {
        method: 'POST',
        mode: 'cors',
        body: body,
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
          },
        host: 'webinarjam.genndi.com',
        path: '/api/register'
    }

    console.log(options);


    const req = https.request(options,(res) => {
        let data = '';

        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
            console.log(chunk);
          data += chunk;
        });

      // The whole response has been received. Print out the result.
      res.on('end', () => {
        console.log(data);
      });

    }).on("error", (err) => {
        return callback(err.message, {
            statusCode: 400
        });
    });

    req.end();
}