const menu=require('../Models/item');
exports.MenuItemFunction=(req,res)=>{
    const {restId}=req.params;
    menu.find({restaurantId:restId})
    .then(response=>
    res.status(200).json({message:"Menu Is shown here...",MenuItems:response}))
    .catch(err=>
        res.status(500).json({error:err})
        )

}
