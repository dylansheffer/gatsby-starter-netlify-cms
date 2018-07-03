exports.handler = function(event, context, callback) {
    const querystring = require('querystring');
    const https = require('https');

    const host = 'webinarjam.genndi.com';

    function performRequest(endpoint, method, data, success) {
        var dataString = JSON.stringify(data);
        var headers = {};

        if (method == 'GET') {
            endpoint += '?' + querystring.stringify(data);
        }
        else {
            headers = {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
            };
        }

        const options = {
            host: host,
            path: endpoint,
            method: method,
            headers: headers
        };

        const req = https.request(options, function(res) {
            res.setEncoding('utf-8');

            let responseString = '';

            res.on("error", (err) => {
                return callback(err.message, {
                    statusCode: 400
                });
            });

            res.on('data', function(data) {
                responseString += data;
            });

            res.on('end', function() {
                console.log(responseString);
                const responseObject = JSON.parse(responseString);
                return success(responseObject);
            });

        });

        req.write(dataString);
        req.end();
    }

    const {
        webinar_id,
        first_name,
        last_name,
        email,
        schedule
    } = event.queryStringParameters;

    console.log(event.queryStringParameters);


    // Throw error if body doesn't have required fields
    if (!(
        webinar_id &&
        first_name &&
        email &&
        schedule
    )) {
        return callback("Request did not contain required fields", {
            statusCode: 400
        });
    }

    const body = {
        api_key: process.env.WEBINAR_JAM_API_KEY || '',
        webinar_id: webinar_id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        schedule: schedule
    }

    performRequest('/api/register', 'POST', body, function(data) {
        console.log(data, "Success");
        return data;
    });
}