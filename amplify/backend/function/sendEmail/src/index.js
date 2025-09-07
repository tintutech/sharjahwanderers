const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = (event, context) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
// };

const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" }); // change region

exports.handler = async (event) => {
  const params = {
    Destination: {
      ToAddresses: [event.to], // recipient email
    },
    Message: {
      Body: {
        Text: { Data: event.body },
      },
      Subject: { Data: event.subject },
    },
    Source: "tintutech@gmail.com", // must be SES verified
  };

  try {
    await ses.sendEmail(params).promise();
    // return { statusCode: 200, body: "Email sent!" };
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // or your app domain
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (err) {
    // return { statusCode: 500, body: err.message };
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};

