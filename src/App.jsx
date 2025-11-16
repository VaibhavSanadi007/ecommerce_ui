import { ReactLenis } from 'lenis/react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Approuter from "./routes/Approuter"
// import GptBox from './components/GptBox'
import Cart from './components/Cart'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import { RiLogoutBoxLine } from "react-icons/ri";
import LogOut from './components/LogOut'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProducts } from './context/ProductsSlice'
import { toast, ToastContainer } from 'react-toastify'


const App = () => {
  const [cartFlag,setCartFlag] = useState(false);
  const [searchFlag,setSearchFlag] = useState(false);
  const [logoutFlag,setLogoutFlag] = useState(false);
    const dispatch = useDispatch();

  const handleGetProducts = async ()=>{
  const data = await axios.get(`/api/products`,{withCredentials:true});
  dispatch(addProducts(data.data.data));
  }

  useEffect(()=>{
    handleGetProducts();
  },[]);

  return (
    <>
    <ReactLenis
  root
  options={{
    duration: 1.4, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smoother easing curve
    smoothTouch: true, 
    smoothWheel: true, 
    syncTouch: true,
    gestureOrientation: "vertical", 
    normalizeWheel: true, 
    touchMultiplier: 1.2, 
  }}
>
  <ToastContainer position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"/>
      {cartFlag && <Cart setCartFlag={setCartFlag} cartFlag={cartFlag} />}
     {searchFlag && <Search setSearchFlag={setSearchFlag}/>}
     <RiLogoutBoxLine size={35} className='fixed z-1 bottom-7 left-10 text-black/70 active:scale-95' onClick={()=>setLogoutFlag(true)}  />
     {logoutFlag && <LogOut setLogoutFlag={setLogoutFlag}/>}
      {/* <GptBox/> */}
      <Navbar setCartFlag={setCartFlag} setSearchFlag={setSearchFlag} />
      <Approuter/>
      <Footer/>
</ReactLenis>
    </>
  )
}
export default App