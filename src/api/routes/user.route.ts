import express, {Request, Response} from "express"
import {getUser, createUser} from '../controllers/user.controller'

const router = express.Router();

// read all
router.get('/', getUser);

// create 
router.post('/create', createUser);


export {router as userRoutes}