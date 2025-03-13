import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const CouponClaim = () => {
  const [message, setMessage] = useState("");
  const [canClaim, setCanClaim] = useState(true);

  useEffect(() => {
    // Check if the user can claim a coupon on component mount
    axios.get("http://localhost:5000/api/status")
      .then((res) => setCanClaim(res.data.canClaim))
      .catch(() => setCanClaim(true));
  }, []);

  const claimCoupon = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/claim");
      setMessage(res.data.message);
      setCanClaim(res.data.canClaim === undefined ? false : res.data.canClaim);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error claiming coupon");
      if (err.response?.status === 429) setCanClaim(false);
    }
  };

  return (
    <div className="bg-image">
      <Box display="flex" flexDirection="column" alignItems="center" paddingTop={"10%"}>
        <Typography variant="h4">Round-Robin Coupon Distribution</Typography>
        <Button onClick={claimCoupon} disabled={!canClaim} variant="contained">
          Claim Coupon
        </Button>
        <Typography variant="h6">{message}</Typography>
      </Box>
    </div>
  );
};

export default CouponClaim;
