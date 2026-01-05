import express from "express";
import {getAllUserUrls} from "../controllers/get_user_urls.js";
import { authWareMandatory } from "../middleware/auth_middleware.js";

const router=express.Router();

router.get("/urls",authWareMandatory,getAllUserUrls);

export default router;