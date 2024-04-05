import React from "react";
import { ProductUrl } from "../../constants";

function Order_Card({ props }) {
  const product = JSON.parse(props.orderdetails.product);
  return (
    <div className="mx-auto mb-6 max-w-2xl ">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0">
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src={`${ProductUrl}/${product.image}`}
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">
                        {product.name}
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                        ★{product.rating}
                      </p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order_Card;
