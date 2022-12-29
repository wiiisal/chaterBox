const router=require("express").Router()
const postcontroler=require("../controles/postList")
router.post("/api/createPost",postcontroler.addpost)
module.exports={routerPost:router}
