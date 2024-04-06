import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold py-7  text-xl">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-y-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    MOTOROLA Edge 40 (Nebula Green, 256 GB) (8 GB RAM)
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : Nebula Green</span>
                    <span>Size : 16.51 cm (6.5 inch) Full HD+ Display</span>
                  </p>
                  <p>Seller : MTAILMODEECOM </p>
                  <p>₹24,999</p>
                </div>
              </div>
            </Grid>
            <Box sx={{ color: deepPurple[500] }}>
              <StarOutlineIcon sx={{ fontSize: "3rem" }} className="px-2 " />
              <span>Rate & Review Product</span>
            </Box>
            <Grid item></Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
