import { Router } from 'express';
import { createUser, getUsers } from '../controllers/user.controller.js';
import { createCentral, getCentral } from '../controllers/central.controller.js';

const userRouter = Router();

userRouter.get('/user/all', getUsers);
userRouter.post('/user', createUser);
userRouter.get('/central/all', getCentral);
userRouter.post('/central', createCentral);

export { userRouter };
