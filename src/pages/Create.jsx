import axios from "axios";
import { useState } from "react";
import { TfiUpload } from "react-icons/tfi";
import { prod_url } from "../utils/Api";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate  = useNavigate();
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [priceAmount,setPriceAmount] = useState(0);
  const [files,setfiles] = useState([]);

  const handlefiles = (e)=>{
    console.log(files);
    const fileArray =  Array.from(e.target.files);
    if(files.length<5){
      setfiles([...files,...fileArray]);
    }
  }

  const handleCreateProduct = async () => {

    const formdata = new FormData();
    formdata.append('title',title);
    formdata.append('description',description);
    formdata.append('priceAmount',priceAmount);
    files.forEach(file => {
    formdata.append('images', file);
  });

  await axios.post(`${prod_url}api/products`,formdata,{withCredentials:true});
  navigate('/shop');
  }

  return (
    <div className="xl:px-80 lg:px-40 md:px-20  xl:py-5 font-light">

        <h1 className="text-3xl flex items-center h-15  text-gray-300 ">Create</h1>

        <div className="w-full  flex flex-col items-center gap-4">
          <input type="text" className="border-b outline-none p-1 h-10 my-2 w-100 " placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />

          <div className="w-100 flex justify-between ">
            <div className="flex items-center gap-2 ">
            <h1 className="text-xl font-light">&#8377;</h1>
            <input type="number" className="border-b outline-none p-1 h-10 my-2 w-30 " placeholder="Price"  onChange={(e)=>setPriceAmount(e.target.value)} />
          </div>
            {/* <div>
            <input type="number" className="border outline-none p-1 h-10 my-2 w-30 " placeholder="Stocks" />
          </div> */}
          </div>

          <div className="w-100 flex items-end gap-3">
            <label htmlFor="productImg" className="flex items-center gap-2 cursor-pointer bg-black text-white p-3 w-fit">Upload files <TfiUpload /></label>
            <input type="file" id="productImg" multiple accept="image/*"  className="hidden"  onChange={handlefiles} />
            <h1 className="text-2xl ">{files.length}/5</h1>
          </div>

          <textarea className="border outline-none p-1 h-25 w-100 resize-none scroll-hide" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />

          <button className="bg-blue-300 text-white p-2 active:scale-95 my-2" onClick={()=>handleCreateProduct()}>Add Product</button>

        </div>

    </div>
  )
}
export default Create