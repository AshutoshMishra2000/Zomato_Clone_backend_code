const express=require('express');
const route=express.Router();
const allLocations=require('../Controllers/locations');
const mealTypes=require('../Controllers/mealtype');
const restaurants=require('../Controllers/restaurants');
const restaurantByLocId=require('../Controllers/RestaurantById');
const menuItemContoller=require('../Controllers/menuItem');
const userSignUpController=require('../Controllers/usersignup')


route.get('/Locations',allLocations.getLoctions);
route.get('/Meals',restaurants.getRestaurnts);
route.get('/Restaurants/:locId',restaurantByLocId.getRestaurantsByLocId);
route.post('/filter', restaurants.filteredRestaurants);
route.get('/Restaurant/:restId',restaurants.getRestaurantByRestId);
route.get('/MenuItem/:restId',menuItemContoller.MenuItemFunction);
route.post('/UserSignUp',userSignUpController.userSignUp);
route.post('/login', userSignUpController.userLogin);
//

module.exports=route;