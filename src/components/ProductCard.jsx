import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cart_url } from "../utils/Api";

const ProductCard = ({item}) => {
    const navigate = useNavigate();
   const [hover, setHover] = useState(false);
  
   const handleProductNav = ()=>{
    navigate(`/product/${item._id}`)
   }

     const handleAddCartItem = async ()=>{
    await axios.post(`${cart_url}/api/cart/items`,{
      productId: item._id,
      quantity: 1,
      url:  item.images?.[0].url,
      title: item?.title,
      price: item.price.amount,
    },{withCredentials:true});
   }

  return (
    <div className="xl:h-130 flex flex-col justify-between font-light ">
      <div className="h-[75%] w-full relative overflow-hidden group" onClick={handleProductNav}>
         <img
          className={`h-full w-full object-cover `}
          src={hover ? item.images[1].url : item.images[0].url}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
        ></img>
        <div className="absolute h-13 -bottom-15 cursor-pointer w-full backdrop-blur bg-white/40 flex items-center justify-center transition-all duration-500 group-hover:bottom-0 ">
          Quick View
        </div>
      </div>
      <h1 className="h-[5%] flex items-center justify-center text-gray-500 ">
        {item.title}
      </h1>
      <h1 className="h-[5%] flex items-center justify-center text-gray-400 ">
        &#8377;{item.price.amount}.00
      </h1>
      <button className="h-[10%] w-full border flex flex-col items-center justify-center text-gray-400  group " onClick={handleAddCartItem}>
        Add to Cart
        <div className="relative w-21 h-0.5  overflow-hidden">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
      </button>
    </div>
  );
};
export default ProductCard;
