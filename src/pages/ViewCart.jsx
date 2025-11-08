import { useSelector } from "react-redux";
import ViewCartItems from "../components/ViewCartItems"
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const cartArrayItems = useSelector((items)=> items.cart.value.cart?.items);
  const totalAmountPrice = useSelector((items)=> items.cart.value.totals?.totalPrice);

  const navigate = useNavigate();

  const handleCheckOutNav = ()=>{
    navigate('/checkout');
  }

  return (
    <div className="xl:px-80 lg:px-40 md:px-20 lg:gap-10  py-10 xl:py-15 w-full font-light flex flex-col md:flex-row xl:gap-10 justify-between">
        <div className=" md:w-[65%] h-fit">
          <h1 className="xl:h-10 h-10  border-b border-b-gray-300">MyCart</h1>
          {
            cartArrayItems && cartArrayItems.map((items,index)=>(
              <ViewCartItems  key={index} cartData={items}  />
            ))
          }
        
        </div>

      <div className="px-5 mt-5 md:mt-0 md:px-0 md:w-[35%] ">
        <h1  className="xl:h-10 border-b  border-b-gray-300">Order Summary</h1>
        <div className="flex justify-between xl:pt-5">
          <h1>Subtotal</h1>
          <h1>&#8377;{totalAmountPrice}.00</h1>
        </div>
        <div className="flex justify-between xl:pt-5">
          <h1>Delivery Charges</h1>
          <h1>&#8377;50.00</h1>
        </div>
        <h1 className="border-b border-b-gray-500 w-fit cursor-pointer  xl:my-5">Esitmate Delivery</h1>
        <div className="border-t border-gray-300">
          <div className="flex items-center justify-between xl:h-15">
            <h1 className="text-2xl font-extralight text-gray-400">Total Cost</h1>
            <h1>&#8377;{totalAmountPrice+50}.00</h1>
          </div>
          <button className="w-full h-10 xl:h-10 bg-black text-white hover:bg-black/80 cursor-pointer active:scale-95" onClick={handleCheckOutNav}>Checkout</button>
        </div>
      </div>

    </div>
  )
}
export default ViewCart