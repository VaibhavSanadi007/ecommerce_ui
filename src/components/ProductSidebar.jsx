import { useState } from "react"

const ProductSidebar = () => {
  const [productInfoFlag,setProductInfoFlag] = useState(false);
    const [returnflag,setReturnFlag] = useState(false);
    const [shipflag,setShipFlag] = useState(false);
  return (
     <div className="md:w-70 xl:w-75 font-light">

        <div className="py-2 border-b border-b-gray-300 cursor-pointer pr-2" onClick={()=>setProductInfoFlag(!productInfoFlag)}>
          <div className=" flex justify-between items-center  ">
          <h1 className="uppercase">Product Info</h1>
          <h1 className=" text-3xl">{productInfoFlag?"-":"+"}</h1>
          </div>

        {productInfoFlag && <p className="w-75 text-[0.8rem] text-gray-400">
          I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
          </p>}

        </div>

        <div className="py-2 border-b border-b-gray-300 cursor-pointer pr-2" onClick={()=>setReturnFlag(!returnflag)}>
          <div className=" flex justify-between items-center  ">
          <h1 className="uppercase">Return and refund policy</h1>
          <h1 className=" text-3xl">{returnflag?"-":"+"}</h1>
          </div>

        {returnflag && <p className="w-75 text-[0.8rem] text-gray-400">
         I'm a Return and Refund policy. I'm a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
          </p>}

        </div>

        <div className="py-2 border-b border-b-gray-300 cursor-pointer pr-2" onClick={()=>setShipFlag(!shipflag)}>
          <div className=" flex justify-between items-center  ">
          <h1 className="uppercase">shipping info</h1>
          <h1 className=" text-3xl">{shipflag?"-":"+"}</h1>
          </div>

        {shipflag && <p className="w-75 text-[0.8rem] text-gray-400">
        I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
          </p>}

        </div>

    
      </div>
  )
}
export default ProductSidebar