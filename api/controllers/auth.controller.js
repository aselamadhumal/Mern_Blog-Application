import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async(req, res,next) => {
    //console.log(req.body);

    
    const {name, email, password} = req.body;

    //Validation
    if(!name || !email || !password || name === '' || email === '' || password === ''){

      //add error handling.utils
       next(errorHandler(400, 'All fields are required'));
    }


    const hashedPassword = await bcryptjs.hash(password, 10);
  
    //Check if user already exists
    //import data from database
   const newUser = new User({
    name, 
    email,
    password:hashedPassword
});

  try{
    await newUser.save();
    res.json('Signup successful');
   }
   catch(error){
       next(error);
   }

  

};