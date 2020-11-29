const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config({path:'./config.env'});
const path = require('path');
//Routes

const itemsRoutes = require("./routes/api/itemsRoutes");

const app = express();

//body parser
app.use(bodyParser.json());
app.use(cors());
//Routes
app.use("/api/items",itemsRoutes);

//DB Congig
const db = process.env.DATABASE_LOCAL;
const port = process.env.PORT;

 //connect to mongodb
 mongoose.connect(db,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useFindModify:false,
     useUnifiedTopology:true
 })
 .then(()=>console.log("Mongodb connected..."))
 .catch(err=>console.log(err));

 //Serve static assets if in production

 if(process.env.NODE_ENV === 'production'){
     //set static folder
     app.use(express.static('client/build'));
     app.get('*',(req,res)=>{
       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
     })
 }

 app.listen(port,()=>console.log(`Server is running on port ${port}`));

