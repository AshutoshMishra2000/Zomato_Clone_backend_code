const { response } = require('express');
const User = require('../Models/SignUpDetails');

exports.userSignUp = (req, res) => {

    const { email, password, FirstName, LastName } = req.body;
    //create a new user onject in which you will store the user data...
    const user = new User(
        {
            email,
            password,
            FirstName,
            LastName 
        }
    );

    user.save()
        .then(response => {
            res.status(200).json({ message: "user login successfully", user: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
exports.userLogin = (req,res)=>{
    const {email,password}=req.body;
    user.find({email:email,password:password})
    .then(response=>{
        if(response.length>0)
        {
        res.status(200).json({ message: "User authenticated successfully",isAuthenticated:true, user: response })
        }
        else{
            res.status(200).json({ message: "Enter valid user id and password", isauthenicated:false, user: response })
        }
    })
    .catch(err=>{
        res.status(500).json({ error: err })  
    })
}