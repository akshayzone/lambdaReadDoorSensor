const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
    docClient.scan({
        TableName: 'door_sensor',
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
