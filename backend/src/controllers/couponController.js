import Coupon from "../models/Coupon.js";
import Claim from "../models/Claim.js";
export const claimCoupon = async (req, res) => {
  const ip = req.ip;
  const existingClaim = await Claim.findOne({ ip });
  if (existingClaim && new Date() - existingClaim.timestamp < 3600000) {
    return res.status(429).json({ message: "Coupon already claimed, try again 1 hour later" });
  }
  const coupon = await Coupon.findOneAndUpdate({ assigned: false }, { assigned: true });
  if (!coupon) {
    return res.status(400).json({ message: "No more coupons" });
  }
  await Claim.findOneAndUpdate({ ip }, { timestamp: new Date() }, { upsert: true });
  res.cookie("couponClaimed", true, { maxAge: 3600000 });
  res.json({ message: `Coupon ${coupon.code} claimed`, canClaim: false });
};
export const checkStatus = (req, res) => {
  res.json({ canClaim: !req.cookies.couponClaimed });
};
