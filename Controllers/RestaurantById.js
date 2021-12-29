const restaurants=require('../Models/restaurant');
exports.getRestaurantsByLocId=(req,res)=>
{
    const { locId }=req.params;
    restaurants.find({location_id:locId}).then(response=>
        //name location id should be same as the name in the schema in the model...
        res.status(200).json({message:"The Restaurant Fetched Successfully",Restaurants:response})
        .catch(err=>res.status(500).json({error:err}))

    )
}





