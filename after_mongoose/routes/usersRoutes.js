import express from "express";
import * as UsersControllers from '../controllers/usersControllers.js';


const router = express.Router();

router.post("/", UsersControllers.createUser);

export default router