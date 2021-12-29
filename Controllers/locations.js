const LocationController=require('../Models/location');
exports.getLoctions=(req,res)=>{
    LocationController.find().then(response=>
        res.status(200).json({message:'the Locations fetched successfully',locationModel:response})
        .catch(err=>
            res.status(500).json({error:err})
            ))

}