import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({ code: String, assigned: Boolean });

export default mongoose.model("Coupon", CouponSchema);
