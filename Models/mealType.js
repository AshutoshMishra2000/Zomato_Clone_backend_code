const mongoose=require('mongoose');
const schema=mongoose.Schema;
const MealTypeSchema=new schema({
    Name:{
        type:String,
        required:true
    },
    mealId:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('MealType',MealTypeSchema,'MealType');