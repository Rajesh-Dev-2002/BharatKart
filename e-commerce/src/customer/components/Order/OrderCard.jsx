import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        className=" "
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p>Realme 11 Pro 5G (Sunrise Beige, 256 GB)</p>
              <p className="opacity-60 font-semibold text-xs">
                Size: 17.02 cm (6.7 inch) Full HD+ Display
              </p>
              <p className="opacity-60 font-semibold text-xs">
                Color: Astral Black
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹27,499</p>
        </Grid>

        <Grid item xs={4}>
         { true && 
          <div>
            <p>
            <AdjustIcon sx={{width:"15px ", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>Delivered on Oct 30</span>
          </p>
          <p className="text-xs">
            Your item has been delivered
          </p>

          </div>
         }
          {false && <p>
            <AdjustIcon/>
            <span>
                Expected Delivery on Oct 30
            </span>
          </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
