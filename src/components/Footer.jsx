const Footer = () => {
  return (
    <div className="bg-stone-200 xl:h-80 text-black  ">
      <div className="xl:px-80 md:px-20 lg:px-40">

        <div className=" flex items-end xl:h-20 xl:gap-3 ">
        <h1 className="xl:w-fit xl:text-5xl  text-center">Life </h1>
        <div className="w-full xl:h-1 border-t border-t-black"/>
      </div>

<footer className=" py-10">
  <div className="max-w-6xl mx-auto  flex flex-col md:flex-row justify-between gap-6">
    
    {/* About Section */}
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl  font-semibold">About Us</h2>
      <p className=" text-sm">
        We provide quality products and excellent customer service.  
        Your satisfaction is our priority.
      </p>
    </div>

  </div>

  {/* Bottom Footer */}
  <div className="mt-10 text-center text-sm ">
    &copy; 2025 YourBrand. All rights reserved.
  </div>
</footer>


      </div>
    </div>
  )
}
export default Footer