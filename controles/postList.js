const {connection}=require("../configurationDatabase/config")
module.exports={
    addpost:((req,res)=>{
        console.log(req.body)
        const query=`insert into list(firstName,lastName,image,createAt)values("${req.body.firstName}","${req.body.lastName}","${req.body.image}","${req.body.createAt}")`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send("post has been created")
        })
    })
}