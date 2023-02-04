const router=require("express").Router()
const getcontroler=require("../controles/update")
router.patch("/api/updatepost/:id",getcontroler.updatepost)
module.exports={routerUD:router}
