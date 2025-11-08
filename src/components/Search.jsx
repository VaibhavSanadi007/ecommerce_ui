import { CiSearch } from "react-icons/ci";
import SearchProducts from "./SearchProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { prod_url } from "../utils/Api";

const Search = ({setSearchFlag}) => {
  const [query,setQuery] = useState('');
  const [resutArr,setResultArr] = useState([]);

  const handleSearchQuery = async ()=>{
    const data = await axios.get(`${prod_url}api/products?q=${query}`,{withCredentials:true});
    setResultArr(data.data.data);
  }

  useEffect(()=>{
    if(!query.trim()){
      return;
    }
    const timerId = setTimeout(()=>{
      handleSearchQuery(query);
    },1000);
    return ()=>{
      clearTimeout(timerId);
    }
  },[query]);

  return (
    <div className="fixed z-2 top-0 left-0 w-full  h-full xl:px-80 py-5 bg-gray-100 font-light">

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <CiSearch size={25} className="cursor-pointer active:scale-95" />
        <input type="search" placeholder="Search" className="outline-none border-b px-1 w-100" onChange={(e)=>setQuery(e.target.value)} />
        </div>
         <button className="xl:h-10  flex flex-col items-center justify-center  group cursor-pointer active:scale-95 " onClick={()=>setSearchFlag(false)} >
        Cancel
        <div className="relative w-13 h-0.5  overflow-hidden ">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
      </button>
      </div>

      <h1 className="my-5 font-semibold">Search Results</h1>
      <div className="h-130 grid grid-cols-4 gap-3 overflow-y-auto"    onWheel={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()}>
    {
      resutArr && resutArr.length>0 ? resutArr.map((items,index)=>(
        <SearchProducts key={index} prodData={items} setSearchFlag={setSearchFlag} />
      )) : <h1 className="text-gray-400">Type to discover products...</h1>
    }
       
      </div>
    </div>
  );
};
export default Search;
