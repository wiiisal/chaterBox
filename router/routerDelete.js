const router=require("express").Router()
const getcontroler=require("../controles/deletepost")
router.delete("/api/deletepost/:id",getcontroler.deletepost)
module.exports={routerDel:router}
