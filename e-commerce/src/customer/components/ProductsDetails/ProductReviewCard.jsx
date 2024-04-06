import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white "
              sx={{ width: 56, height: 56, bgcolor: "9155FD" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div className="">
              <p>Ram</p>
              <p>April 5, 2023</p>
            </div>
          </div>
          <Rating  value={4.0} name="half-rating" />
          <p className="opacity-70 font-semibold text-lg">Thanks, Flipkart for providing us great deals on electronics. Amazing packing and the products are 100% original without any mishandling and scratch. This is the first time I order something huge from your store and I am glad to get cashback also from your website.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
