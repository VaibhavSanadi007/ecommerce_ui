import axios from "axios"

const LogOut = ({setLogoutFlag}) => {

  const handleLogout = async () => {
    await axios.get(`/api/auth/logout`,{
      withCredentials:true
    }).then((data)=>{
      console.log(data)
      setLogoutFlag(false);
    })
  }

  return (
    <div className="fixed z-2 top-0 left-0 h-full w-full flex items-center justify-center bg-black/80 backdrop-blur font-light"  onClick={()=>setLogoutFlag(false)}  >

        <div className="w-[30%] h-[30%] bg-white py-3 px-10" onClick={(e)=>{e.stopPropagation()}}>
            <h1 className="text-3xl ">Logout</h1>

            <div className="flex flex-col items-center justify-center gap-10 h-full">
              <h1>Are you sure you want to log out?</h1>

           <div className="w-full flex items-end justify-evenly ">
        <button className="py-1.5 px-10 bg-black text-white text-2xl active:scale-95" onClick={()=>handleLogout()} >
        Yes
      </button>
        <button className="py-1.5 px-10 bg-blue-300 text-white text-2xl active:scale-95" onClick={()=>setLogoutFlag(false)}  >
        No
      </button>
      </div>
            </div>

      </div>

        </div>
  )
}
export default LogOut