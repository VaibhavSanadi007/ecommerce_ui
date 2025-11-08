import Lenis from "lenis";
import ProductSidebar from "../components/ProductSidebar"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cart_url, prod_url } from "../utils/Api";

const Product = () => {
  const lenis = new Lenis();
  const {prodId} = useParams();

  const [product,setProduct] = useState({});
  const [index,setIndex] = useState(0);
  const [counter,setCounter] = useState(1);

   const handleGetProduct = async ()=>{
    const {data} = await axios.get(`${prod_url}api/products/${prodId}`,{withCredentials:true});
    setProduct(data.product);
   }

   const handleMainImg = (index) => {
    setIndex(index);
   }

   const incrementCount = ()=>{
    if(counter<20){
      setCounter(prev => prev+1);
    }
   }
   const decrementCount = ()=>{
    if(counter>1){
      setCounter(prev => prev-1);
    }
   }

   const handleAddCartItem = async ()=>{
    await axios.post(`${cart_url}/api/cart/items`,{
      productId: prodId,
      quantity: counter,
      url: product.images?.[0].url,
      title: product?.title,
      price: product.price?.amount,
    },{withCredentials:true});
   }

    useEffect(()=>{
      handleGetProduct();
      lenis.scrollTo(0,{immediate:true});
    },[]);
  return (
    <div className=" md:flex justify-center font-light lg:py-10 xl:py-10 ">

      <div className="px-3 xl:px-0">
        <img className="h-100 lg:h-80 xl:h-120  xl:w-110 object-contain" src={product.images?.[index]?.url} alt="" />

        <div className="flex items-center gap-3 lg:h-20 xl:h-20 ">
          {
            product.images && product.images.map((items,index)=>(
              <img key={index} className="h-15 w-15 xl:h-15 xl:w-15 object-cover" src={items.url} onClick={()=>handleMainImg(index)} />
            ))
          }
 
        </div>

       <p className="">{product.description}</p>

      </div>

      <div className="px-5 mt-5 md:mt-10 lg:mt-0 xl:mt-0 xl:px-10 flex flex-col gap-10 xl:gap-15">
      <h1 className="text-3xl">{product?.title}</h1>
      <h1>&#8377;{product.price?.amount}.00</h1>
      <div>
        <h1>Quantity</h1>
         <div
              id="quantity_counter"
              className=" w-30 border flex justify-evenly gap-2 cursor-pointer"
            >
              <button className="text-xl px-1" onClick={decrementCount}>-</button>
              <h1 className="text-xl px-1">{counter}</h1>
              <button className="text-xl px-1" onClick={incrementCount}>+</button>
            </div>
      </div>

<div className="flex flex-col gap-5">
      <button className="xl:h-10 w-75 border flex flex-col items-center justify-center  group cursor-pointer " onClick={handleAddCartItem}>
        Add to Cart
        <div className="relative w-21 h-0.5  overflow-hidden">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
      </button>

      <button className="h-10 xl:h-10 w-75 border flex flex-col items-center justify-center  group cursor-pointer bg-black text-white " >
        Buy Now
      </button>

      <ProductSidebar/>

</div>

      </div>



    </div>
  )
}
export default Product