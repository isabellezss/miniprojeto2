import express from "express";
import { userRouter } from "./src/routes/user.router.js";

const app = express();

app.use(express.json());

app.use(userRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});
