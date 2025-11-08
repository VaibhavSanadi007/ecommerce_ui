import axios from "axios";
import { useState } from "react"
import { auth_url } from "../utils/Api";
import { useDispatch } from "react-redux";
import { adduser } from "../context/UserSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signFlag,setSignFlag] = useState(false);

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('user@gmail.com');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('User@123');
  const [role,setRole] = useState('');

  const handleSignUp = async ()=>{
  const data =  await axios.post(`${auth_url}/api/auth/register`,{
     username,
      email,
      password,
      fullName: { firstName, lastName },
      role
  },{
    withCredentials:true
  });
  dispatch(adduser(data.data.user));
  navigate('/');
  }

  const handleSignIn = async ()=>{
  const data =  await axios.post(`${auth_url}/api/auth/login`,{
      email,
      password,
  },{withCredentials:true});
  dispatch(adduser(data.data.user));
  navigate('/');
  }

  return (
    <div className="xl:px-80 lg:px-40 md:px-20 px-2 py-5 font-light  ">
      
      <div className="flex items-center justify-center xl:h-30  ">
        <div className="w-full xl:h-1 border-t border-t-gray-300 " />
        <h1 className="xl:w-130 w-200 xl:text-xl font-light text-gray-500 text-center">Sign In</h1>
        <div className="w-full xl:h-1 border-t border-t-gray-300"/>
      </div>

      <div className="py-5">

       {signFlag && <div className="flex gap-3  ">

       <div className="flex flex-col">
        <label htmlFor="first" className="text-sm">Enter your First Name</label>
           <input type="text"  id="first" className="h-10 w-43 md:w-70 xl:w-80 px-3 outline-none border "  onChange={(e)=>{setFirstName(e.target.value)}}/>
       </div>

         <div className="flex flex-col">
        <label htmlFor="last" className="text-sm">Enter your Last Name</label>
           <input type="text"  id="last" className="h-10 w-43 md:w-70 xl:w-80 px-3 outline-none border "  onChange={(e)=>{setLastName(e.target.value)}}/>
       </div>

        </div>}

      </div>

         <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">Enter your Email</label>
           <input type="email"  id="email" className="h-10 md:w-90 xl:w-100 px-3 outline-none border " value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
       </div>

        {signFlag && <div className="flex flex-col mt-3">
        <label htmlFor="username" className="text-sm">Enter a Unique Username</label>
           <input type="text"  id="username" className="h-10  md:w-90 xl:w-100 px-3 outline-none border "  onChange={(e)=>{setUsername(e.target.value)}} />
       </div>}

         <div className="flex flex-col mt-3">
        <label htmlFor="password" className="text-sm">Enter a Password</label>
           <input type="password"  id="password" className="h-10 md:w-90  xl:w-100 px-3 outline-none border " value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       </div>

    { signFlag && <select className="h-10 mt-5 outline-none border px-2"  onChange={(e)=>{setRole(e.target.value)}}>
      <option value="user">User</option>
      <option value="seller">Seller</option>
    </select> }

      <div className="h-30 flex items-center justify-center ">
        <button className="py-2 px-10 bg-blue-300 text-white text-2xl active:scale-95" onClick={()=> signFlag?handleSignUp() : handleSignIn() }>
        Submit
      </button>
      </div>
      {
        signFlag?<h1>already have an account? <span className="font-semibold underline cursor-pointer" onClick={()=>setSignFlag(false)} >Sign in</span> </h1>:<h1>create an account? <span className="font-semibold underline cursor-pointer" onClick={()=>setSignFlag(true)}>Sign up</span> </h1>  
      }
    </div>
  )
}
export default SignIn