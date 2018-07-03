exports.handler = function(event, context, callback) {
    const {
        webinar_id,
        first_name,
        last_name,
        email,
        schedule
    } = event.queryStringParameters;

    console.log(event.queryStringParameters);

    const data = {
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
        console.log(data);
       return callback("Request did not contain required fields", {
            statusCode: 400
        });
    }



    fetch('https://webinarjam.genndi.com/api/register', {
        method: 'POST',
        mode: 'cors',
        body: data,
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
          }
    });
}