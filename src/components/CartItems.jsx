import axios from "axios";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteItemInCart, updateQuantityInCart } from "../context/CartSlice";
const CartItems = ({cartData}) => {
  const [quantity,setQuantity] = useState(cartData.quantity || 1);
  const dispatch = useDispatch();

  const handleAddQuantity = async (prodId)=>{
    await axios.patch(`/api/cart/items/${prodId}`,{quantity: quantity+1},{withCredentials:true});
    dispatch(updateQuantityInCart({productId:prodId,quantity: quantity+1 }))
  }
  const handleSubQuantity = async (prodId)=>{
    await axios.patch(`/api/cart/items/${prodId}`,{quantity: quantity-1},{withCredentials:true});
    dispatch(updateQuantityInCart({productId:prodId,quantity: quantity-1 }))
  }

  const handleRemoveCartItem = async (prodId)=>{
    await axios.delete(`/api/cart/items/${prodId}`,{withCredentials:true});
    dispatch(deleteItemInCart(prodId))
  }

  return (
    <div className="xl:h-40 xl:py-4  flex  xl:px-2  border-b border-b-gray-200">
      <img className=" xl:w-[25%] object-cover" src={cartData.url} />
      <div className="xl:w-[75%] flex flex-col xl:gap-1 xl:px-4 text-gray-900 font-light">
        <div className=" flex justify-between">
           <h1>{cartData.title}</h1>
           <RiDeleteBin6Line size={25} className="active:scale-95 cursor-pointer text-gray-500" onClick={()=>handleRemoveCartItem(cartData.productId)} />
        </div>
        <h1>&#8377;{cartData.price}</h1>

      <div className="flex justify-between">

      <div id="quantity_counter" className="border flex justify-evenly gap-2 cursor-pointer">
        <h1 className="text-xl px-1" onClick={()=>{
          if(quantity>1){
            setQuantity(prev=> prev - 1);
            handleSubQuantity(cartData.productId);
          }
        }}>-</h1>
        <h1 className="text-xl px-1">{quantity}</h1>
        <h1 className="text-xl px-1" onClick={()=>{
          if(quantity<20){
            setQuantity(prev=> prev + 1)
            handleAddQuantity(cartData.productId);
          }
        }
          } >+</h1>
      </div>

      <h1>&#8377;{cartData.price * quantity}.00</h1>

      </div>
      </div>
    </div>
  )
}
export default CartItems