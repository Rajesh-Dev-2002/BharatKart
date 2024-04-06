import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homePage/HomePage";
import Cart from "../customer/components/Cart/Cart";

import Footer from "../customer/components/footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/products/Product";
import ProductDetails from "../customer/components/ProductsDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomersRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/> }></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/> }></Route>
        
      </Routes>

      <div>
      <Footer />
      </div>
    </div>
  );
};

export default CustomersRouters;
