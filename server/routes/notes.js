import { Router } from "express";
import { authenticateToken } from "../controllers/auth.js";
import { createNote, getNotes } from "../controllers/notes.js";

const router = Router()

router.use(authenticateToken)

router.get('/notes', getNotes)
router.post('/notes', createNote)

export default router