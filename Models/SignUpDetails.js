const mongoose=require('mongoose');
const schema=mongoose.Schema;
const UserSchema=new schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('Users',UserSchema,'User');