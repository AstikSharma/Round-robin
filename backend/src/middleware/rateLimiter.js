import rateLimit from "express-rate-limit";

export default rateLimit({ windowMs: 60 * 60 * 1000, max: 1 });
