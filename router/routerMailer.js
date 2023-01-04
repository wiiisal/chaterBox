const router=require("express").Router()
const mailcontroler=require("../controles/mailer")
router.post('/api/sendmail',mailcontroler.nodemail)
module.exports={routerMail:router}