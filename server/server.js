const express=require("express");
const app=express();
const db=require("./models");
const PORT= process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiroutes= require("../server/models/create_table");
app.use("/api",apiroutes);

db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on: http://localhost:${PORT}`);
    });
});

module.exports=db;