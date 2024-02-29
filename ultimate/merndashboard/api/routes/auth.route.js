import exoress from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = exoress.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
