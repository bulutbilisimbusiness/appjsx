import exoress from "express";
import { signin, signup, google } from "../controllers/auth.controller.js";

const router = exoress.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
