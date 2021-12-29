const mealTypeController=require('../Models/mealType')
exports.getMeals=(req,res)=>{
    mealTypeController.find().then(response=>
    res.status(200).json({message:"the Mealtypes fetched successfully",mealType:response}))
    .catch(err=>
        res.status(500).json({error:err})
        )

}

