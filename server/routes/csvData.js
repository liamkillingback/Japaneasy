import { getRandomxWords } from "../controllers/csvData.js";
import express from "express";

const router = express.Router();

router.get('/randomxWords', getRandomxWords);


export default router;
