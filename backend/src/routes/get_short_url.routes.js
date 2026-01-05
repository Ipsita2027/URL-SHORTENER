import express from "express";
import {shortenUrl,shortenUrlCustom} from "../controllers/get_short_url.controller.js";
import { authWareMandatory,authWare } from "../middleware/auth_middleware.js";

const router = express.Router();

//What amazes me is shortenUrl instead of shortenUrl(req,res) is used !!
router.post("/",authWare,shortenUrl);
router.post("/custom",authWareMandatory,shortenUrlCustom);

export default router;