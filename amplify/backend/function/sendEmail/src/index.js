/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */// const AWS = require('aws-sdk');
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");


// Configure SES (replace region with your SES region)
// const ses = new AWS.SES({ region: 'us-east-1' });

const ses = new SESClient({ region: "us-east-1" });

// Lambda handler
exports.handler = async (event) => {
  console.log('Event received:', event);

  // Handle CORS preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow your domain in production
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: ""
    };
  }

  try {
    // Parse request body
    const { toEmail, subject, message } = JSON.parse(event.body);

    const params = {
      Destination: { ToAddresses: [toEmail] },
      Message: {
        Body: { Text: { Charset: "UTF-8", Data: message } },
        Subject: { Charset: "UTF-8", Data: subject },
      },
      Source: "tintutech@gmail.com", // Replace with SES verified email
    };

    // Send email via SES
    // await ses.sendEmail(params).promise();

    const command = new SendEmailCommand(params);
    await ses.send(command);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ message: "Email sent successfully!" })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ error: err.message })
    };
  }
};
