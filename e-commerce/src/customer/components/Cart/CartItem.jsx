import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md ">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            REDMI 12 (Pastel Blue, 128 GB) (6 GB RAM)
          </p>
          <p className="opacity-70">
            Size: 17.25 cm (6.79 inch) Full HD+ Display
          </p>
          <p className="opacity-70 mt-2">Seller : Akshnav Online</p>

          <div className="flex space-x-5 items-center text-lg  text-gray-900 pt-6">
            <p>₹13,000</p>
            <p className="opacity-60 line-through ">₹19,000</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>


        </div>

       
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton >
                   <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton sx={{color:"RGB(145 85 253)"}}>
                   <AddCircleOutlineIcon/>
            </IconButton>

            
          </div>
           <div>
             <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
           </div>


        </div>


    </div>
  );
};

export default CartItem;
