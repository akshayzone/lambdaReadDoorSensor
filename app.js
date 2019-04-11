// lambda function
console.log ("starting function");
const AWS = require('aws-sdk');
const docClient = AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function (e, ctx, callback) {
    let param = {
        TableName: 'doorSensor',
        Limit: 2
    };

    docClient.scan(param, function (err, data) {
        if (err) {
            callback (err, null);
        } else {
            callback (null, data);
        }
    })
};