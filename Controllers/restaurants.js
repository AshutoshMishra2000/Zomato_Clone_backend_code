const restaurants=require('../Models/restaurant');
exports.getRestaurnts=(req,res)=>
{
    restaurants.find().then(response=>
        res.status(200).json({message:"The Restaurants Fetched Successfully",Restaurants:response})
        .catch(err=>res.status(500).json({error:err}))

    )
}

//filter api -> 4th api

exports.filteredRestaurants=(req,res)=>
{
    //here we get data from the body
    let {location,cuisine,mealtype,lcost,hcost,sort,page}=req.body;
    //the line below is for sorting logic using the ternary operator....
    sort=sort?sort:1;
    page=page?page:1;
    const itemperPage=2;
    const startIndex=itemperPage*page-itemperPage;
    const lastIndex=itemperPage*page;
    let filterObj={};
    //just keeep one thing in mind that user can do anything and we as developer need to be ready for that....
    location && (filterObj['location_id']=location);
    cuisine && (filterObj['cuisine_id']=cuisine);
    mealtype && (filterObj['mealtype_id']=mealtype);
   lcost &&hcost&& (filterObj['lcost']=lcost) && (filterObj['hcost']=hcost);
    restaurants.find(filterObj).sort({min_price:sort})
    .then(response=>{
        //number that we show in the pageination will be
        let pagearr=[];
        for(let i=1;i<Math.ceil(response.length/itemperPage);i++)
        {
          pagearr.push(i);
        }
        const FilteredRestaurants=response.slice(startIndex,lastIndex);
        res.status(200).json({message:"The Restaurants Fetched Successfully",Restaurants:FilteredRestaurants,pages:pagearr})
        .catch(err=>res.status(500).json({error:err}))

     } )
}



//code for getting the particular restaurnt on the basis of  unique restaurant id  5th api
exports.getRestaurantByRestId=(req,res)=>
{
    const { restId }=req.params;
    //when we have to find the based on unique key we can use findbyId() method of the mongoose db bcz this gives output in object format and if we want only one result it is better to get data in object format rather then in array format like find() method
    restaurants.findById(restId).then(response=>
        //name location id should be same as the name in the schema in the model...
        res.status(200).json({message:"The Restaurant Fetched Successfully",Restaurants:response})
        .catch(err=>res.status(500).json({error:err}))

    )
}
