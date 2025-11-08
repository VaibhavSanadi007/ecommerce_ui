import { useNavigate } from "react-router-dom"
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { prod_url } from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { addSellerProducts, deleteSellerProducts, updateSellerProducts } from "../context/SellerProductsSlice";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sellerProdData = useSelector((item)=>item.seller.value);

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [priceAmount,setPriceAmount] = useState(0);
  const [editFlag,setEditFlag] = useState(null);
  const [prodId,setProdId] = useState(null);
  const handleCreateNav = ()=> {
    navigate('/create');
  }

  const handleSellerProductUpdate = async ()=>{
    const data = await axios.patch(`${prod_url}api/products/update/${prodId}`,{
      title,
      priceAmount,
      description,
    },{withCredentials:true});
    dispatch(updateSellerProducts(data.data.product));
  setEditFlag(prev => prev==null?index:null);
  }

  const handleSellerProductDelete = async (prodId)=>{
     await axios.delete(`${prod_url}api/products/delete/${prodId}`,{withCredentials:true});
    dispatch(deleteSellerProducts(prodId));
  }

  const handleEdit = (prodId,index)=>{
  setEditFlag(prev => prev==null?index:null);
  setProdId(prodId)
  }

  const handleSellerProducts = async ()=>{
   const data = await axios.get(`${prod_url}api/products/seller`,{withCredentials:true});
   dispatch(addSellerProducts(data.data.data));
  }

  useEffect(()=>{
    handleSellerProducts();
  },[]);

  return (
    <div className="xl:px-70 lg:px-30 md:px-10 xl:py-5 font-light">
       <div className="flex items-center justify-between w-full ">
        <h1 className="text-3xl flex items-center h-15  text-gray-300 ">Dashboard</h1>
        {editFlag!=null ? <button className="h-10 px-5 bg-blue-300 text-white cursor-pointer active:scale-95" onClick={()=>handleSellerProductUpdate()} >Save Edit</button> :  <button className="h-10 px-5 bg-black text-white cursor-pointer active:scale-95" onClick={handleCreateNav}>create</button>}
       </div>
       <div className="my-5 w-full  ">

        {
          sellerProdData?.length > 0 ? sellerProdData.map((items,index)=>(

        <div key={index} className="w-full h-20   grid grid-cols-6 place-content-center place-items-center gap-x-4  ">
          <img src={items.images?.[0].url} className="h-15 w-20 object-cover"  />
          {editFlag == index ?  <input type="text" value={title} className="border-b outline-none w-30 " placeholder="edit title" onChange={(e)=>setTitle(e.target.value)} /> : <h1>{items.title}</h1>}
          {editFlag == index ?  <input type="number" value={priceAmount} className="border-b outline-none w-20 " placeholder="edit price" onChange={(e)=>setPriceAmount(e.target.value)} /> : <h1>&#8377;{items.price.amount}</h1>}
          {
            editFlag == index ? <textarea onChange={(e)=>setDescription(e.target.value)} className="text-[0.7rem] w-60 h-full resize-none border outline-none p-0.5 "   placeholder="edit description"  ></textarea> : <p className="h-full w-50 bg-red-20 text-[0.7rem] text-gray-500 ">{(items.description).slice(0,50)}....</p>
          }
         
          <FaRegEdit size={20} className="active:scale-95 w-10 " onClick={()=>handleEdit(items._id,index)} />
          <RiDeleteBin6Line size={20} className="active:scale-95 w-10" onClick={()=>handleSellerProductDelete(items._id)} />
        </div>

          )) : <div className="h-50">No Products has been created yet...</div>
        }


      

        

       </div>
    </div>
  )
}
export default Dashboard