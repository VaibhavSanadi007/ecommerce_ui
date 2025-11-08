import { data, useNavigate } from "react-router-dom"
import CartItems from "./CartItems"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cart_url } from "../utils/Api";
import { addCartItems } from "../context/CartSlice";
import { useEffect } from "react";


const Cart = ({setCartFlag}) => {
  const cartArrayItems = useSelector((items)=> items.cart.value.cart?.items);
  const totalAmountPrice = useSelector((items)=> items.cart.value.totals?.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNav = ()=>{
    navigate('/viewcart');
    setCartFlag(false);
  }

  const handleAddCartItems = async ()=>{
    const data = await axios.get(`${cart_url}/api/cart`,{withCredentials:true});
    dispatch(addCartItems(data.data));
  }

  useEffect(()=>{
    handleAddCartItems();
  },[]);

  return (
    <div className="h-full w-full fixed z-2 bg-black/80 backdrop-blur flex justify-end" onClick={()=>setCartFlag(false)}>
      
    <div className="xl:h-full xl:w-110 xl:px-3 xl:py-2 bg-white relative" onClick={(e)=>{e.stopPropagation()}} >

      <div className="xl:h-[10%] flex items-center justify-between border-b border-black xl:pr-5">
        <h1 className="text-2xl font-semibold">Cart <span className="font-light text-sm">{'('}{cartArrayItems?.length || 0 } items{')'}</span> </h1>

      <h1 className="text-2xl font-light cursor-pointer" onClick={()=>setCartFlag(false)}>X</h1>
      </div>

    <div className="xl:h-[75%] overflow-y-scroll "   onWheel={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()}> 
    {cartArrayItems && cartArrayItems.map((items,index)=>(
      <CartItems key={index} cartData={items} />
    ))}
    </div>

    <div className="bg-white xl:h-[15%] xl:w-full font-light flex flex-col gap-4 justify-center items-center ">
      <div className="flex justify-between xl:w-full">
        <h1> Esitmated Total </h1>
        <h1>&#8377;{totalAmountPrice}.00</h1>
      </div>

       <button className="xl:h-10 w-full border flex flex-col items-center justify-center  group cursor-pointer " onClick={handleNav} >
        View Cart
        <div className="relative w-21 h-0.5  overflow-hidden">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
      </button>

    </div>

    </div>


    </div>
  )
}
export default Cart