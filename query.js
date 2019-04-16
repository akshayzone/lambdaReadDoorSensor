const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
    docClient.query({
        TableName: 'door_sensor',
        KeyConditionExpression: "#Serial = :serial",
        ExpressionAttributeNames:{
            "#Serial": "Serial"
        },
        ExpressionAttributeValues: {
            ":serial": "000000007f8c12ac"
        },
        ScanIndexForward: false
    }, (err, data)=>{
        if(err) {
            // console.log(err);
            callback(err, null);
        } else {
            // console.log(data);     
            callback(null, data);
        }
        
    });
}
