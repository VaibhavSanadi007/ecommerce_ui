import { useEffect } from "react";
import ShopProductCard from "../components/ShopProductCard"
import Sidebar from "../components/Sidebar"
import Lenis from "lenis";
import axios from "axios";
import { prod_url } from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../context/ProductsSlice";

const Shop = () => {
  const handleGetProducts = async ()=>{
    const data = await axios.get(`/api/products`,{withCredentials:true});
    dispatch(addProducts(data.data.data));
  }
  const lenis = new Lenis();
  const prodData = useSelector((item)=> item.prod.value);
  const dispatch = useDispatch();

  

  useEffect(()=>{
    if(lenis){
      lenis.scrollTo(0,{immediate:true});
    }

    handleGetProducts();
  },[])

  return (
    <div className=" xl:px-25 md:px-10 lg:px-20 py-4 xl:py-5  md:flex  gap-10">
      
    <Sidebar/>

    <div className="xl:w-[80%] ">
      <h1 className="text-3xl h-15 font-light text-gray-300">All Products</h1>

      <div className="grid xl:grid-cols-4 grid-cols-1  md:grid-cols-3 gap-5">

      {
        prodData && prodData.map((items,index)=>(

          <ShopProductCard key={index} items={items} />

        ))
      }
     

      </div>

    </div>

    </div>
  )
}
export default Shop