import express from "express";
import { get_users, login, register, update_words } from '../controllers/auth.js';


const router = express.Router();

router.post("/login", login);
router.post("/register", register)
router.post("/update_words", update_words)
router.get("/userRankings", get_users)

export default router;
