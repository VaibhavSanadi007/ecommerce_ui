import { useState } from "react"
import { BsChatTextFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
const GptBox = () => {
  const [gptFlag,setGptFlag] = useState(false);
  return (
    <div className="fixed z-1 bottom-5 right-10 ">
      
    { gptFlag ?
    <div className="xl:h-120 xl:w-90 " >

    <div className="xl:h-[15%] bg-black text-white flex items-center justify-between xl:px-5">
     <div>
       <h1 className="font-bold text-xl">Life Gpt</h1>
      <h1 className="text-[0.8rem] font-light text-gray-300">Explore using AI</h1>
     </div>
     <h1 className="text-2xl font-light cursor-pointer" onClick={()=>setGptFlag(false)}>X</h1>
    </div>

    <div className="bg-gray-200 xl:h-[70%] px-2 py-1">
      <div className=" ">
        <h1 className="border xl:w-fit py-1 px-2 rounded">hi</h1>
      </div>
      <div className="flex justify-end ">
        <h1 className=" xl:w-fit py-1 px-2 rounded bg-black/80 text-white">hey</h1>
      </div>
    </div>

    <div className="bg-gray-50 flex justify-between items-center px-2 xl:h-[15%] ">
      <textarea name="" id="" className="resize-none font-light w-full outline-none scroll-hide " placeholder="Type your message..." ></textarea>
      <IoMdSend size={30} className="cursor-pointer active:scale-90" />
    </div>

    </div>
    
    : <div className="xl:w-18  xl:h-18 bg-black/80 text-white flex items-center justify-center" onClick={()=>setGptFlag(true)}>
        <BsChatTextFill size={25}   />
      </div> }



    </div>
  )
}
export default GptBox