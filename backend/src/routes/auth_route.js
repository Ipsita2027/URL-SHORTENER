import express from "express";
import {verify_user,register_user} from "../controllers/auth.controller.js";
import { authWareMandatory } from "../middleware/auth_middleware.js";
import { isAuthenticated,logUserOut } from "../controllers/auth.controller.js";

const router=express.Router();

router.post("/login",verify_user);
router.post("/register",register_user);
router.get("/me",authWareMandatory,isAuthenticated);
router.post("/logout",authWareMandatory,logUserOut);

export default router;