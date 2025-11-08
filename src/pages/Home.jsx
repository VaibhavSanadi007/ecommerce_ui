import { useNavigate } from "react-router-dom"
import Caraousel from "../components/Caraousel.jsx"
import ProductCard from "../components/ProductCard.jsx"
import { useSelector } from "react-redux";
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

    </div>
  )
}
export default Home