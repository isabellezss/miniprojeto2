import { Router } from "express";

import { createUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

//quero criar um rota que envie todos os usuarios

userRouter.get("/user/all", getUsers);

userRouter.post("/user", createUser);

export { userRouter };