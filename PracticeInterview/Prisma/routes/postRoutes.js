import { Router } from "express";
import { createPost, deletePost, fetchPosts } from "../Controller/PostController.js";
// import { createUser, deleteUser, fetchUsers, updateUser } from "../Controller/UserController.js";

const router = Router();

router.get("/", fetchPosts)
router.post("/", createPost)
// router.put("/:id", updateUser)
router.delete("/:id", deletePost)

export default router