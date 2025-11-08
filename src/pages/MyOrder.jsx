import axios from "axios"
import { useEffect, useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
const MyOrder = () => {
  const navigate = useNavigate();
   const [orderData,setOrderData] = useState([]);
  const [deleteOrderFlag,setDeleteOrderFlag] = useState(false);
  const handleGetMyOrders = async ()=>{
    const data = await axios.get(`/api/orders/me`,{withCredentials:true});
    setOrderData(data.data.orders);
    console.log(data.data.orders)
  }

  const handleDeleteMyOrder = async (orderId)=>{
     await axios.post(`/api/orders/${orderId}/cancel`,{},{withCredentials:true});
    navigate('/');
  }

  useEffect(()=>{
    handleGetMyOrders();
  },[]);
  return (
    <div className="xl:px-70 lg:px-40 md:px-20 xl:py-5 font-light">
        <h1 className="text-3xl flex items-center h-15  text-gray-300 ">MyOrder</h1>
            <div className="xl:h-fit xl:py-4  flex  xl:px-2  border-b border-b-gray-200">
         
          <div className=" xl:w-[75%] flex flex-col xl:gap-1 xl:px-4 text-gray-900 font-light">
           {
            orderData && orderData.map((Orderitems,index)=>(
          <div key={index}  className="bg-gray-100 px-2">
                 <div className=" flex justify-between  py-4 px-2 my-2  ">
              <h1>Order Id : {Orderitems._id}</h1>
              <RiDeleteBin6Line onClick={()=>setDeleteOrderFlag(true)}
                size={25}
                className="active:scale-95 cursor-pointer text-gray-500"
              />
            </div>
            <div>
              {
                Orderitems?.items && Orderitems.items.map((i,index)=>(
                  <div className="grid grid-cols-3 " key={index}>
                    <img src={i.url} className="h-10 " />
                    <h1>{i.title}</h1>
                    <h1>quantity: {i.quantity}</h1>
                  </div>
                )) 
              }
            </div>
            
           {Orderitems.status != 'CANCELLED' ?
           <>
            <div className="my-1.5" >
              <h1>Currecny : {Orderitems.totalPrice.currency}</h1>
              <h1>Total Price : {Orderitems.totalPrice.amount}</h1>
            </div>
           <div className=" py-3 my-1 ">
              <h1 className="text-gray-300 text-xl">Shipping Adress</h1>
            <div className="grid grid-cols-3 ">
              <h1>{Orderitems.shippingAddress?.city}</h1>
              <h1>{Orderitems.shippingAddress?.state}</h1>
              <h1>{Orderitems.shippingAddress?.country}</h1>
            </div>
            </div>
           </>
           : 
           <h1 className="text-end px-2 text-red-400 font-semibold">Order has been Cancelled</h1>}
            {
              deleteOrderFlag && <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur flex items-center justify-center" onClick={()=>setDeleteOrderFlag(false)}>
                  <div className="w-[30%] h-[30%] bg-white py-3 px-10" onClick={(e)=>{e.stopPropagation()}}>
    
                <div className="flex flex-col items-center justify-center gap-10 h-full">
                  <h1>Are you sure you want to cancel the Order?</h1>
    
               <div className="w-full flex items-end justify-evenly ">
            <button className="py-1.5 px-10 bg-black text-white text-2xl active:scale-95" onClick={()=>{handleDeleteMyOrder(Orderitems._id)}}  >
            Yes
          </button>
            <button className="py-1.5 px-10 bg-blue-300 text-white text-2xl active:scale-95" onClick={()=>setDeleteOrderFlag(false)}  >
            No
          </button>
          </div>
                </div>
    
          </div>
              </div>
            }
          </div>
            ))
           }
          </div>
        </div>
    </div>
  )
}
export default MyOrder