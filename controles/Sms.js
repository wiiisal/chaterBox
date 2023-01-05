const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
module.exports={
    sendSms:((req,res)=>{
        client.messages
        .create({body: 'Hi there', from: '+17262042746', to:req.body.number})
        .then(message => console.log(message))
        .catch((err)=>console.log(err))
    })
}

