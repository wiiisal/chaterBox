const router=require("express").Router()
const getcontroler=require("../controles/getList")
router.get("/api/getpost",getcontroler.getpost)
module.exports={routerget:router}
