exports.handler = function(event, context, callback) {
    const {
        webinarId,
        firstName,
        lastName,
        email,
        schedule
    } = event.body;

    const data = {
        apiKey: process.env.WEBINAR_JAM_API_KEY || '',
        webinarId,
        firstName,
        lastName,
        email,
        schedule
    }

    // Throw error if body doesn't have required fields
    if (!(
        webinarId &&
        firstName &&
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