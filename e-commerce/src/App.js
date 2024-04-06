import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import ProductDetails from "./customer/components/ProductsDetails/ProductDetails";
import Checkout from "./customer/components/checkout/Checkout";

import Footer from "./customer/components/footer/Footer";
import Product from "./customer/components/products/Product";
import HomePage from "./customer/pages/homePage/HomePage";
import CustomersRouters from "./Routers/CustomersRouters";

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomersRouters/>}></Route>
      </Routes>
     

      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>
     
    </div>
  );
}

export default App;
