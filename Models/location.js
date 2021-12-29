//here we crete schema of the data or database collection integration code
const mongoose=require('mongoose');
//creating the schema
const schema=mongoose.Schema;
const locationSchema=new schema({
    name:{
        type:String,
        required:true
    },
    location_id:{
        type:Number,
        required:true
    }
});

//Models are created from schemas using the mongoose.model() method:
//connecting the model(locationSchema) with actual schema Locations
module.exports=mongoose.model("locations", locationSchema,'Locations');
//third parameter is same as the collection name;