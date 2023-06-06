import { Router } from "express";
import * as urlControllers from "../controllers/url"

const router = Router()

router.get("/url", urlControllers.getURL)



export default router