const mongoose=require('mongoose');
const schema=mongoose.Schema;
const restaurantSchema=new schema(
    {
        name:{
            type:String,
            required:true
        },
        location_id:{
            type:Number,
            required:true
        }
    }
)

module.exports=mongoose.model('mealType',restaurantSchema,'Restaurants');