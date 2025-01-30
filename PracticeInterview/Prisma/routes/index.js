import { Router } from "express";
import UserRoutes from "./userRoutes.js"

const router = Router();

router.use("/api/user", UserRouter)

export default router;