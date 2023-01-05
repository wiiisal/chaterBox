const router=require('express').Router();
const constolrssms=require('../controles/Sms');

router.post('/api/sendsms',constolrssms.sendSms)
module.exports={routerSms:router}