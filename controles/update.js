const {connection}=require("../configurationDatabase/config")
module.exports={
    updatepost:((req,res)=>{
        const query=`UPDATE list SET firstName="${req.body.firstName}",lastName="${req.body.lastName}",image="${req.body.image}",createAt="${req.body.createAt}" where id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}