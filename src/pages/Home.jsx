import { useNavigate } from "react-router-dom"
import Caraousel from "../components/Caraousel.jsx"
import ProductCard from "../components/ProductCard.jsx"
import { useSelector } from "react-redux";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate();

  const prodData = useSelector((item)=> item.prod.value);
  
  const handleHomeNav = ()=>{
    navigate('/shop');
  }

  return (
    <div className="xl:px-80 xl:py-5 py-3 md:px-20 lg:px-40">
      <div className=" flex items-center justify-center xl:h-30 h-10 lg:h-20 xl:gap-5 ">
        <div className="w-full xl:h-1 border-t border-t-gray-300 " />
        <h1 className="xl:w-160 w-200 xl:text-xl font-light text-gray-500 text-center">Everyday Essentials Brand</h1>
        <div className="w-full xl:h-1 border-t border-t-gray-300"/>
      </div>
      {/* caraousel */}
        <Caraousel/>
      {/* items heading */}
       <div className=" flex items-center justify-center xl:h-30 h-10 lg:h-20  xl:gap-5 ">
        <div className="w-full xl:h-1 border-t border-t-gray-300 " />
        <h1 className="xl:w-160 w-200  xl:text-xl font-light text-gray-500 text-center">Featured Items</h1>
        <div className="w-full xl:h-1 border-t border-t-gray-300"/>
      </div>
      {/* items  */}
      <div className="bg-yellow-10 px-5 md:px-0 grid grid-cols-2 md:grid-cols-3  gap-5">
      {
        prodData && [...prodData].sort(()=>Math.random() - 0.5).slice(0,3).map((item,index)=>(
          <ProductCard key={index} item={item}/>
        ))
      }
      </div>

      <div className="xl:h-35 h-30 flex items-center justify-center ">
        <button className="xl:h-10 xl:px-10 border transition-all duration-300 hover:bg-blue-300 hover:text-white cursor-pointer " onClick={handleHomeNav}>Shop All</button>
      </div>

      <div className="h-30 flex justify-evenly gap-5 my-5 ">
        <div className="h-full flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-center "><LiaShippingFastSolid size={30} /></div>
          <h1 className="text-center font-semibold  w-[80%] text-[0.9rem] ">Free Shipping</h1>
          <h1 className="text-[0.8rem] text-gray-500">For all Orders Over  &#8377;100.</h1>
        </div>
        <div className="h-full flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-center"><PiKeyReturnLight size={30} /></div>
          <h1 className="text-center font-semibold  w-[80%] text-[0.9rem] ">30 Days Returns</h1>
          <h1 className="text-[0.8rem] text-gray-500">For an Exchange Product.</h1>
        </div>
        <div className="h-full flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-center"><MdPayment size={30} /></div>
          <h1 className="text-center font-semibold  w-[80%] text-[0.9rem] ">Secured Payment</h1>
          <h1 className="text-[0.8rem] text-gray-500">Payment Cards Accepted.</h1>
        </div>
        <div className="h-full flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-center"><BiSupport size={30} /></div>
          <h1 className="text-center font-semibold  w-[80%] text-[0.9rem] ">Support 24/7</h1>
          <h1 className="text-[0.8rem] text-gray-500">Contact us Anytime.</h1>
        </div>
      
      </div>

    </div>
  )
}
export default Home