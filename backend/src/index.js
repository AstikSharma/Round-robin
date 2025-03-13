import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import couponRoutes from "./routes/CouponRoutes.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use("/api", couponRoutes);

connectDB().then(() => app.listen(5000, () => console.log("Server running")));
