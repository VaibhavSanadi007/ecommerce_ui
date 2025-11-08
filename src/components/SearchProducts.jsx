import { useNavigate } from "react-router-dom"
import SearchItemSkeleton from "./SearchItemSkeleton";

const SearchProducts = ({prodData,setSearchFlag}) => {
  const navigate = useNavigate();

  const handleProdNav = ()=>{
    navigate(`/product/${prodData._id}`);
    setSearchFlag(false);
  }

  if(!prodData){
    return [1,2,3,4].map((items,index)=>(
        <SearchItemSkeleton key={index} items={items} />
      ))
  }

  return (
    <div className="xl:h-80  flex flex-col gap-4 font-light ">
      <div className="h-[80%] w-full relative overflow-hidden group" onClick={handleProdNav} >
        <img
          className="h-full w-full object-cover product-hover "
          src={prodData.images[0].url || "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"}
          alt=""
        ></img>
        
      </div>
      <h1 className="h-[5%] flex items-center justify-center ">
        {prodData.title}
      </h1>
      <h1 className="h-[5%] flex items-center justify-center  ">
        &#8377;{prodData.price.amount}.00
      </h1>
    </div>
  )
}
export default SearchProducts