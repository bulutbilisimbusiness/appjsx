import exoress from "express";
import { signup } from "../controllers/auth.controller.js";

const router = exoress.Router();

router.post("/signup", signup);

export default router;
