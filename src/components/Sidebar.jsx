import axios from "axios";
import { useEffect, useState } from "react"
import { prod_url } from "../utils/Api";
import { useDispatch } from "react-redux";
import { addProducts } from "../context/ProductsSlice";
const Sidebar = () => {
  const [priceFlag,setPriceFlag] = useState(false);

 const dispatch = useDispatch();

   const handleGetProducts = async (options = {})=>{
    const { text , price , skip , limit , types } = options;

    const params = new URLSearchParams();

    if(text) params.append('q',text);
    if(price) params.append('maxprice',price);
    if(skip) params.append('skip',skip);
    if(limit) params.append('limit',limit); 

    if (types && types.length > 0) {
      types.forEach((t) => params.append("types", t));
    }

    const data = await axios.get(`${prod_url}api/products?${params.toString()}`,{withCredentials:true});
    dispatch(addProducts(data.data.data));
  }

    useEffect(() => {
    handleGetProducts();
  }, []);
 
  return (
      <div className="xl:w-[15%]  w-50 lg:w-50 px-2 md:px-0 font-light ">
        <h1 className="font-medium text-black/70 text-xl py-5 border-b border-b-gray-300">Filter by</h1>

       <div
  className="py-2 border-b border-b-gray-300 cursor-pointer pr-2 "
  onClick={() => setPriceFlag(!priceFlag)}
>
  <div className="flex justify-between items-center">
    <h1>Price</h1>
    <h1 className="text-3xl">{priceFlag ? "-" : "+"}</h1>
  </div>

  {priceFlag && (
    <div
      className="flex flex-col gap-2 mt-2 lg:w-50"
      onClick={(e) => e.stopPropagation()}
    >
      <label className="flex items-center gap-2 w-25 lg:w-50" onClick={()=>handleGetProducts({price:3000})}   >
        <input type="radio" name="price"/>
        <span>Less than 3000</span>
      </label>

      <label className="flex items-center gap-2 w-25 lg:w-50"  onClick={()=>handleGetProducts({price:5000})}  >
        <input type="radio" name="price" />
        <span>Less than 5000</span>
      </label>

      <label className="flex items-center gap-2 w-25 lg:w-50 " onClick={()=>handleGetProducts({price:8000})}  >
        <input type="radio" name="price"   />
        <span>Less than 8000</span>
      </label>
    </div>
  )}
</div>

      </div>
  )
}
export default Sidebar