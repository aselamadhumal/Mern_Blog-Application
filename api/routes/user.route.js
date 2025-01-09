import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

/*router.get("/test", (req, res) => {
    res.json({message: 'API is working!'});
});*/


//Test Api{this is a best practise}
router.get("/test",test);

export default router;