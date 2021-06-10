import express, {Request, Response} from "express"
import {getUser, getOneUser, createUser, updateUser, deleteUser} from '../controllers/user.controller'

const router = express.Router();

// Read all
router.get('/', getUser);

// Read one 
router.get('/:id', getOneUser)

// Create 
router.post('/create', createUser);

// Update
router.put('/update/:id', updateUser);

// Delete
router.delete('/delete/:id',deleteUser);

export {router as userRoutes}