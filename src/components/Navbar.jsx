import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

const Navbar = ({setCartFlag,setSearchFlag}) => {
  const userData = useSelector((item)=>item.user.value);
  console.log(userData)
  const navigate = useNavigate();

  const handleShopNav = ()=>{
    navigate('/shop')
  }

  const handleSignNav = ()=>{
    navigate('/signin')
  }
  const handleProfileNav = ()=>{
    navigate('/profile')
  }

  const handleHomeNav = ()=>{
    navigate('/');
  }

  const handleDashboardNav = ()=>{
    navigate('/dashboard');
  }

  const handleAboutNav = ()=>{
    navigate('/about');
  }

  const handleMyOrderNav = ()=>{
    navigate('/myorder');
  }


  return (
    <div className=" xl:h-55 xl:px-80 lg:px-40 px-3 md:px-20" >
      <div id="firstNav" className="flex items-center justify-between  xl:h-[40%] xl:py-0 py-1.5 md:py-2">
      <CiSearch size={25} className="cursor-pointer active:scale-95" onClick={()=>setSearchFlag(true)} />
      <div id="subNav" className="flex items-center xl:gap-4.5 gap-4">
      <FaUserCircle size={25} className="cursor-pointer active:scale-95" onClick={handleProfileNav} />
      <h1 className="cursor-pointer active:scale-95" onClick={handleSignNav}>{userData?.username ? userData.username :"Sign In" }</h1>
      {userData.role == 'user' && <LiaShoppingBagSolid size={25} className="cursor-pointer active:scale-95" onClick={()=>setCartFlag(true)} />}
      </div>

      </div>

      <div id="secondNav" className=" xl:h-[40%] h-15   flex items-center justify-center ">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold ">Life</h1>
      </div>

      <div id="thirdNav" className="xl:px-10 flex items-center justify-evenly">
        <h1 className="hover:text-gray-200 cursor-pointer duration-400 uppercase" onClick={handleShopNav}>Shop</h1>
        <h1 className="hover:text-gray-200 cursor-pointer duration-400 uppercase" onClick={handleHomeNav}>Home</h1>
        <h1 className="hover:text-gray-200 cursor-pointer duration-400 uppercase" onClick={handleAboutNav}>About</h1>
        {
          userData.role == 'user' && <h1 className="hover:text-gray-200 cursor-pointer duration-400 uppercase" onClick={handleMyOrderNav}>Order</h1>
        }
        
        {
          userData.role == 'seller' &&  <h1 className="hover:text-gray-200 cursor-pointer duration-400 uppercase" onClick={handleDashboardNav}>Dashboard</h1>
        }
       
      </div>

    </div>
  )
}
export default Navbar