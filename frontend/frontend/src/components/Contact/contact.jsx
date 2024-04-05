import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import axios from "axios";
import { ContactUsUrl } from "../../constants";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.place != "" &&
      formData.country != "" &&
      formData.message != ""
    ) {
      axios
        .post(`${ContactUsUrl}/contact/`, {
          name: formData.name,
          email: formData.email,
          place: formData.place,
          country: formData.country,
          message: formData.message,
        })
        .then((res) => {
          toast.success(res.data.message);
          setFormData({
            name: "",
            email: "",
            place: "",
            country: "",
            message: "",
          });
        })
        .catch((err) => console.log(err));
    }
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
          Let’s Connect With Us !
        </p>
        <form onSubmit={handleSubmit}>
          <div className="md:flex items-center mt-12">
            <div className="md:w-[50%] flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                aria-label="Please input name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input name"
              />
            </div>
            <div className="md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                aria-label="Please input email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-[50%] flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Place
              </label>
              <input
                tabIndex={0}
                role="input"
                aria-label="Please input company name"
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Country
              </label>
              <input
                tabIndex={0}
                aria-label="Please input country name"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
