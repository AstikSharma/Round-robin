import express from "express";
import { claimCoupon, checkStatus } from "../controllers/couponController.js";
import rateLimiter from "../middleware/rateLimiter.js";

const router = express.Router();
router.post("/claim", rateLimiter, claimCoupon);
router.get("/status", checkStatus);

export default router;
