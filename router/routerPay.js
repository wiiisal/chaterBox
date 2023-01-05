const router=require("express").Router()
const postcontroler=require("../controles/payment")
router.post("/api/create-checkout-session",postcontroler.payment)
module.exports={routerpay:router}
