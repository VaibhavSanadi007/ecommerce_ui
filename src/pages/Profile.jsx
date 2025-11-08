import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addaddress, updateuser } from "../context/UserSlice";

const Profile = () => {
  const userData = useSelector((item)=>item.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName,setFirstName] = useState(userData.fullName?.firstName || '');
  const [lastName,setLastName] = useState(userData.fullName?.lastName || '');
  const [username,setUsername] = useState( userData?.username ||'');
  const [password,setPassword] = useState('');

  const [addressFlag,setAddressFlag] = useState(false);

  const [street,setStreet] = useState(userData.addresses?.street || '');
  const [city,setcity] = useState(userData.addresses?.city || '');
  const [state,setState] = useState(userData.addresses?.state || '');
  const [country,setCountry] = useState(userData.addresses?.country || '');
  const [pincode,setPincode] = useState(userData.addresses?.pincode || 0);

  const handleHomeNav = ()=>{
    navigate('/');
  }

  const handleAddAdress = async ()=>{
    const data = await axios.post(`/api/auth/users/me/addresses`,{
      street,
      city,
      state,
      country,
      pincode
    },{
      withCredentials:true
    });
    dispatch(addaddress(data.data.addresses))
    setAddressFlag(false);
  }

  
  const handleUserUpdate = async ()=>{
  const data =  await axios.patch(`/api/auth/update`,{
     username,
      password,
      fullName: { firstName, lastName },
  },{
    withCredentials:true
  });
  dispatch(updateuser(data.data.data));
  }

  return (
    <div className="xl:px-80  font-light">
      
       <div className=" flex items-center justify-center xl:h-30 ">
        <div className="w-full xl:h-1 border-t border-t-gray-300 " />
        <h1 className="xl:w-160 xl:text-xl  text-gray-500 text-center">Edit Profile</h1>
        <div className="w-full xl:h-1 border-t border-t-gray-300"/>
      </div>

      <div className="flex items-center flex-col pb-10">

        <div className="h-100 w-120  ">
          
          <div className="h-full w-full flex flex-col justify-between gap-5 ">
           <div>
             <input type="text"  placeholder="Edit Username" value={username} className="border-b outline-none px-2 py-1 w-full" onChange={(e)=>setUsername(e.target.value)} />
           </div>
          
           <div className="flex gap-5 ">
             <input type="text"  placeholder="Edit Firstname" value={firstName} className="border-b outline-none px-2 py-1  w-full" onChange={(e)=>setFirstName(e.target.value)} />
             <input type="text"  placeholder="Edit Lastname" value={lastName} className="border-b outline-none px-2 py-1 w-full"  onChange={(e)=>setLastName(e.target.value)}/>
           </div>
          
           <div>
             <input type="password"  placeholder="Edit Password" value={password} className="border-b outline-none px-2 py-1 w-full" onChange={(e)=>setPassword(e.target.value)} />
           </div>

          <div>
            <button className="bg-black text-white p-2 active:scale-95 cursor-pointer" onClick={()=>setAddressFlag(true)}>Add Address</button>
          </div>

           <div>
             <input type="email" readOnly  value={userData?.email || 'test@example.com'}  placeholder="Email" className="bg-gray-100 outline-none px-2 py-2 w-100" />
           </div>

           <div className="h-20 flex items-end  ">
        <button className="py-1.5 px-10 bg-blue-300 text-white text-2xl active:scale-95" onClick={()=>{handleHomeNav();handleUserUpdate();}}>
        Save
      </button>
      </div>

          </div>

        </div>

      </div>

    {
      addressFlag && <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black/80 backdrop-blur"  onClick={()=>setAddressFlag(false)}>

        <div className="w-[45%] h-1/2 bg-white py-3 px-10" onClick={(e)=>{e.stopPropagation()}}>
          <div className="flex justify-between ">
            <h1 className="text-2xl">Address</h1>
             <button className="xl:h-10  flex flex-col items-center justify-center  group cursor-pointer active:scale-95 " onClick={()=>setAddressFlag(false)} >
            Cancel
          <div className="relative w-13 h-0.5  overflow-hidden ">
          <div className="absolute left-0 top-0 h-0.5 border-b w-0  transition-all duration-200 group-hover:w-full"></div>
        </div>
         </button>
          </div>


          <div className="h-full  flex flex-col justify-evenly py-5 gap-5 ">
           <div>
             <input type="text"  placeholder="Street" className="border-b outline-none px-2 py-1 w-full" value={street} onChange={(e)=>setStreet(e.target.value)} />
           </div>
          
           <div className="flex justify-between gap-3  w-full">
             <input type="text"  placeholder="city" className="border-b outline-none px-2 py-1 " value={city} onChange={(e)=>setcity(e.target.value)} />
             <input type="text"  placeholder="state" className="border-b outline-none px-2 py-1 " value={state} onChange={(e)=>setState(e.target.value)} />
             <input type="text"  placeholder="country" className="border-b outline-none px-2 py-1 " value={country} onChange={(e)=>setCountry(e.target.value)} />
           </div>
          
           <div>
             <input type="number"  placeholder="pincode" className="border outline-none px-2 py-1 w-50" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
           </div>

           <div className="w-full  flex items-end justify-end ">
        <button className="py-1.5 px-10 bg-blue-300 text-white text-2xl active:scale-95" onClick={()=>handleAddAdress()} >
        Save
      </button>
      </div>

          </div>


      </div>

        </div>

    }

    </div>
  )
}
export default Profile