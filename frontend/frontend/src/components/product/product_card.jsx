import React, { useState } from "react";
import { OrderUrl, ProductUrl } from "../../constants";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

function ProductCard({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    houseName: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = Cookies.get("user");

    if (
      address.name != "" &&
      address.houseName != "" &&
      address.street != "" &&
      address.city != "" &&
      address.zip != "" &&
      address.country != ""
    ) {
      axios
        .post(`${OrderUrl}/order/`, {
          username: username,
          fullname: address.name,
          house: address.houseName,
          street: address.street,
          city: address.city,
          zipcode: address.zip,
          country: address.country,
          product: JSON.stringify(props),
        })
        .then((res) => {
          toast.success(res.data.message);
          console.log(res);
        })
        .catch((error) => {
          toast.error("Failed to submit order. Please try again.");
          console.error(error);
        });
      setIsModalOpen(false);
    } else {
      toast.error("Give all Credentals");
    }
    setAddress({
      name: "",
      houseName: "",
      street: "",
      city: "",
      zip: "",
      country: "",
    });
  };

  return (
    <div className="relative mx-5 mt-2 flex w-[220px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl"
        href="#"
        style={{
          backgroundImage: `url(${ProductUrl}/${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-slate-900">
            {props.name}
          </h5>
        </a>
        <div className="mt-4 mb-3 flex items-center justify-between">
          <p>
            <span className="text-xl  font-bold text-slate-900">
              ₹{props.price}
            </span>
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-1 ml-2 rounded bg-yellow-200 px-1.5 py-0.5 text-xs font-semibold">
              {props.rating}
            </span>
          </div>
        </div>
        <button
          onClick={openModal}
          className="flex items-center w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Order Now
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-800 opacity-75"
            onClick={closeModal}
          ></div>
          <div className="bg-white p-5 rounded-lg shadow-md w-[95%] md:w-[50%] z-50">
            <h2 className="text-lg font-semibold mb-3">
              Order Confirmation - (COD only)
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="houseName"
                  className="block text-sm font-medium text-gray-700"
                >
                  House Name / Number
                </label>
                <input
                  type="text"
                  id="houseName"
                  name="houseName"
                  value={address.houseName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={address.street}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={address.zip}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={address.country}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="mt-3 px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit Order
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
