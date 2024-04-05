import React, { useEffect, useState } from "react";
import Order_Card from "./order_card";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import axios from "axios";
import { OrderedProductUrl } from "../../constants";
import Cookies from "js-cookie";

function Orders_Page() {
  const [ordered, setOrdered] = useState([]);
  useEffect(() => {
    const user = Cookies.get("user");
    axios
      .post(`${OrderedProductUrl}/ordered_products/`, { email: user })
      .then((res) => {
        setOrdered(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar />
      <section className="min-h-svh  py-10 sm:py-10 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-14">
              Your Orders
            </h1>
          </div>
          {ordered.map((product, i) => (
            <Order_Card key={i} props={product} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Orders_Page;
