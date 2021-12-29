const mongoose=require('mongoose');
const schema=mongoose.Schema;
const menuItemsSchema=new schema(
    {
        name:{
            type:String,
            required:true
        },
        restaurantId:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('MenuItem',menuItemsSchema,'MenuItems');