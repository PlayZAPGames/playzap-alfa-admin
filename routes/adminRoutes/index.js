// routes/index.ts
import { Router } from "express";
import loginRoutes from "./loginRoute.js";

const router = Router();

router.use("/", loginRoutes);

export default router;

