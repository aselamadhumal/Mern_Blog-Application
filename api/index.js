import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();
//Connect to database
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Database is connected');
})
.catch((error) => {
    console.log('Database is not connected');
});

//Create server
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!!`);
});

//Test Api
/*app.get('/test',(req,res)=>{
    res.json({message: 'API is working!'});
});*/

//Routes{user.route.js}
//conroller=>routes=>index.js
app.use('/api/user', userRoutes);

 