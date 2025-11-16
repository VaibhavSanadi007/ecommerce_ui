import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaymentButton from "../services/PaymentButton";
import { toast } from "react-toastify";

const Checkout = () => {

  const [addressFlag, setAddressFlag] = useState(false);
  const userData = useSelector((item) => item.user.value);
  const cartData = useSelector((item) => item.cart.value);
  
  const [street, setStreet] = useState(userData.addresses?.[0]?.street || "");
  const [city, setcity] = useState(userData.addresses?.[0]?.city || "");
  const [state, setState] = useState(userData.addresses?.[0]?.state || "");
  const [country, setCountry] = useState(userData.addresses?.[0]?.country || "");
  const [pincode, setPincode] = useState(userData.addresses?.[0]?.pincode || 0);

  const [paymentFlag,setPaymentFlag] = useState(false);

  const [orderId,setOrderId] = useState('');

  const handleAddressBox = () => {
    setAddressFlag(true);
  };

  const handleSave = () => {
    setAddressFlag(false);
  };

  const handleOrder = async () => {
    if(street.length == 0 || city.length == 0 || state.length == 0 || country.length == 0 || !pincode){
      toast.info("please provide your desired address✨");
      return;
    }
    const shippingAddress = {
       street,
        city,
        state,
        country,
        pincode,
    }
    const data = await axios.post(
      `/api/orders/create`,{shippingAddress},
      {
        withCredentials: true,
      }
    );
    setOrderId(data.data.order._id);
    setPaymentFlag(true);
  };

  return (
    <div className="xl:px-80 md:px-20 lg:px-40 xl:py-5 font-light">
      <div className="flex items-center justify-between w-full ">
        <h1 className="text-3xl flex items-center h-15  text-gray-300 ">
          Checkout
        </h1>
      </div>
      <h1 className="w-full text-xl text-center font-semibold text-black/60 border-b border-b-gray-200 py-1">
        Billing Details
      </h1>
      <div className="flex justify-between py-5 ">
        <div className=" w-[70%] ">
          <h1 className="h-10 flex items-center justify-center text-2xl py-10">
            Your Order
          </h1>
          <div className="grid grid-cols-3 gap-y-5 my-4">
            <h1 className="text-gray-400">Product</h1>
            <h1 className="text-gray-400">Quantity</h1>
            <h1 className="text-gray-400">SubTotal</h1>
            </div>

            {cartData.cart?.items &&
              cartData.cart?.items.map((item,index) => (
                <div className="grid grid-cols-3 gap-y-5 my-3" key={index}>
                  <h1>{item.title}</h1>
                  <h1>{item.quantity}</h1>
                  <h1>{item.price * item.quantity}</h1>
                </div>
              ))}

          <div className="">
            <button
              className="h-12.5 w-30 bg-blue-300 text-white cursor-pointer active:scale-95 duration-300 my-4"
              onClick={handleOrder}
            >
              Place order
            </button>
          </div>
          { paymentFlag &&  <div className="">
          <h1 className="h-10 flex items-center justify-center text-2xl py-10">
            Payment Time
          </h1>
          <div className="flex flex-col gap-3">
            
           <div className="flex justify-between  w-[70%] ">
             <h1 className="text-gray-400   h-10 flex items-center text-2xl font-normal">
              Total Quantity
            </h1>
            <h1 className=" h-10 flex items-center text-xl ">
              {cartData.totals.totalQuantity}
            </h1>
            
           </div>
            
           <div className="flex justify-between  w-[70%]">
             <h1 className="text-gray-400   h-10 flex items-center text-2xl font-normal">
              Total Price
            </h1>
             <h1 className="  h-10 flex items-center text-xl">
              &#8377;{cartData.totals.totalPrice + 50}.00
            </h1>

           </div>
           {/* <button className="bg-black w-50  h-15 text-white active:scale-95 duration-200" onClick={handlePaymentButton}>Confirm Payment</button> */}
           <PaymentButton orderId={orderId} />
          </div>
       </div>}
        </div>

        <button
          className="bg-black w-50  h-15 text-white active:scale-95 duration-200"
          onClick={handleAddressBox}
        >
          Confirm Address
        </button>

        {addressFlag && (
          <div
            className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black/80 backdrop-blur"
            onClick={() => setAddressFlag(false)}
          >
            <div
              className="w-[45%] h-1/2 bg-white py-3 px-10"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex justify-between ">
                <h1 className="text-2xl">Shipping Address</h1>
                <button
                  className="xl:h-10  flex flex-col items-center justify-center  group cursor-pointer active:scale-95 "
                  onClick={() => setAddressFlag(false)}
                >
                  Cancel
                  <div className="relative w-13 h-0.5  overflow-hidden ">
                    <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
                  </div>
                </button>
              </div>

              <div className="h-full  flex flex-col justify-evenly py-5 gap-5 ">
                <div>
                  <input
                    type="text"
                    placeholder="Street"
                    name="street"
                    className="border-b outline-none px-2 py-1 w-full"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>

                <div className="flex justify-between gap-3  w-full">
                  <input
                    type="text"
                    placeholder="city"
                    name="city"
                    className="border-b outline-none px-2 py-1 "
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="state"
                    name="state"
                    className="border-b outline-none px-2 py-1 "
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="country"
                    name="country"
                    className="border-b outline-none px-2 py-1 "
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="pincode"
                    name="pincode"
                    className="border outline-none px-2 py-1 w-50"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>

                <div className="w-full  flex items-end justify-end ">
                  <button
                    className="py-1.5 px-10 bg-blue-300 text-white text-2xl active:scale-95"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};
export default Checkout;
