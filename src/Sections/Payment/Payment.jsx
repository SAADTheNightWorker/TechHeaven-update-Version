import React, { useState } from "react";
import { useContextState } from "../../context/ContextProvider";
import PaymentPrice from "./PaymentPrice";
import StripeCheckout from "react-stripe-checkout";



const Payment = () => {
  const [{ basket, User }, dispatch] = useContextState();


  const totalPrice = basket?.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold text-accent text-center mt-10 tracking-wide">
        Stripe Payment
      </h1>

      <div className="flex text-gray-400 flex-col justify-center items-center mt-20">
        <div className="flex gap-2 my-5">
          <label className="font-semibold">Email :</label>
          <p>
            {User ? (
              User.email
            ) : (
              <span className="text-red-400 animate-ping">Loading...</span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <label className="font-semibold">UserId :</label>
          <p>
            {User ? (
              User.uid
            ) : (
              <span className="text-red-400 animate-ping">Loading...</span>
            )}
          </p>
        </div>

        <div className="flex gap-2 my-3">
          <label className="font-semibold">SubTotal :</label>
          <p className="font-semibold text-red-500">{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="w-[80%] mx-auto text-center">

        <StripeCheckout
        stripeKey="pk_test_51Nwxh7I1IauvQiLYpihkqJA8eLnf0EBKzZfJklfB5i9LRshlgfUFOYRJ6vH10uDOZLY99gtGZoV5gszVcXEGPQT600JG0MychQ"
        token=""
        name="Buy Order"
        description="Purchase order"
        amount={totalPrice * 100}
        currency="USD"
        billingAddress={true}
        shippingAddress={true}
        allowRememberMe={false}
        email={User? User.email : ""}
        zipCode={true}
        phone={User? User.phone : ""}
      >
        <button className="border cursor-pointer border-none outline-none bg-accent hover:bg-red-800 transition-all duration-300 text-white font-semibold p-3 m-2 px-4 rounded-md">
          Stripe Payment Pay: {totalPrice} $
        </button>
      </StripeCheckout>
     
      </div>
      <div className="w-[80%] border border-black rounded-lg p-10 mx-auto mt-10">
        <div className="border rounded-lg p-2 flex justify-between font-bold text-gray-500">
          <p className="ml-16">Products</p>
          <p>Id</p>
          <p>Price</p>
        </div>

        {basket.map((item, index) => (
          <PaymentPrice
            key={index}
            index={index}
            img={item.img}
            text={item.detail}
            length={index}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Payment;
