exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  var message = "Dxinfra App Update 2.0";

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      Output: message
    })
  });
};
