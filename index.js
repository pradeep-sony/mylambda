exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  var message = "Hello cool guy from AWS!";

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      Output: message
    })
  });
};
