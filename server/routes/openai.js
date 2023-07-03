import express from 'express';
import { getWords } from '../controllers/openai.js'
const router = express.Router();

router.post('/generate', getWords);

export default router;