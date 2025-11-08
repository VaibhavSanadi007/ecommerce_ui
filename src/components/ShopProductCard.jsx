import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const ShopProductCard = ({items}) => {
const [hover, setHover] = useState(false);

  const navigate = useNavigate();
  const handleNavProduct = () => {
    navigate(`/product/${items._id}`);
  }

  const handleAddCartItem = async ()=>{
    await axios.post(`/api/cart/items`,{
      productId: items._id,
      quantity: 1,
      url:  items.images?.[0].url,
      title: items?.title,
      price: items.price.amount,
    },{withCredentials:true});
   }
   
  return (
     <div className="h-100 px-10 md:px-0 xl:h-115 flex flex-col justify-between font-light ">
      <div className="h-[70%] w-full relative overflow-hidden group" onClick={handleNavProduct}>
        <img
          className={`h-full w-full object-cover `}
          src={hover ? items.images[1].url : items.images[0].url}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
        ></img>
        
      </div>
      <h1 className="h-[5%] flex items-center justify-center  ">
        {items.title}
      </h1>
      <h1 className="h-[5%] flex items-center justify-center  ">
        &#8377;{items.price.amount}.00
      </h1>
      <button className="h-[10%] w-full border flex flex-col items-center justify-center text-gray-400  group " onClick={handleAddCartItem}>
        Add to Cart
        <div className="relative w-21 h-0.5  overflow-hidden">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
      </button>
    </div>
  )
}
export default ShopProductCard