//importing the express package
const express=require('express');
//importing the mongoose module
const mongoose=require('mongoose');
//importing the cors package to avoid the error
const cors=require('cors');
const router=require('./Router/index');
const app=express();

app.use(cors());
app.options('*', cors());
// to read the data in json object form
app.use(express.json());

const port=2002;
const host="LocalHost";
const url="mongodb://127.0.0.1:27017/Project1";
const serverDbUrl="mongodb+srv://Zomato_clone_user:WayJoYpehbpPDRBQ@cluster0.zeton.mongodb.net/Test_Data?retryWrites=true&w=majority";
app.use('/',router);


mongoose.connect(serverDbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(res=>{
    app.listen(port,host ,()=>{
        console.log("the server is running at portNO:",port);
    
        
        
    });
}).catch(err=>console.log(err));
//mongoose.connect(serverDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });