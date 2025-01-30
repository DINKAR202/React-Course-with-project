import { Router } from "express";
import { createUser, deleteUser, fetchUsers, updateUser } from "../Controller/UserController.js";

const router = Router();

router.get("/", fetchUsers)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router