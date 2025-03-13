import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema({ ip: String, timestamp: Date });

export default mongoose.model("Claim", ClaimSchema);
