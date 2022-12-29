const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"wissal1111",
    database:"todolist"
})
connection.connect((err)=>err?console.log(err)
:console.log("database is alive"))
module.exports={connection}