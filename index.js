const express=require("express")
const app=express()
const port=3002
const cors=require("cors")
const cookieParser=require("cookie-parser")
const {routerPost}=require("./router/routerList")
const {routerget}=require("./router/routerGet")
const{routerUD}=require("./router/routerUpdate")
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:false,
        optionsSuccessStatus:200
    })
)
app.use(express.json())
app.use("/",routerUD)
app.use("/",routerget)
app.use("/",routerPost)
app.listen(port,()=>{
    console.log("http://localhost:"+port)
})
