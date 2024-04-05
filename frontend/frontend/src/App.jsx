import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInForm from "./components/login/login";
import RegisterForm from "./components/register/register";
import ProductPage from "./components/product/productpage";
import Orders_Page from "./components/orders/orderspage";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInForm />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/orders" element={<Orders_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
