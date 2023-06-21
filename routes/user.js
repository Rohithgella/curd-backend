import express from "express";
import {getUsers,createUser,getUser,deleteUser,updateUser} from "../controller/user.js";
const router = express.Router();
router.get('/users', getUsers).post('/user', createUser);
router.get('/users/:id', getUser).delete('/users/:id', deleteUser).put('/users/:id', updateUser);
export default router;