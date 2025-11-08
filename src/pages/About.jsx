import aboutImg from '../assets/aboutus.avif'
const About = () => {
  return (
    <div className="xl:px-80 lg:px-40 md:px-20 py-5">
       <div className=" flex items-center justify-center xl:h-30 xl:gap-5 ">
        <div className="w-full xl:h-1 border-t border-t-gray-300 " />
        <h1 className="xl:w-160 w-200 xl:text-xl font-light text-gray-500 text-center ">Behind the Brand</h1>
        <div className="w-full xl:h-1 border-t border-t-gray-300"/>
      </div>

      <div className="h-120 flex items-center justify-center">
        <img src={aboutImg} className="object-cover"></img>
      </div>

      <h1 className="text-xl font-light xl:px-25 text-center">Where Style Meets Soul</h1>
      <p className="text-[0.9rem] text-gray-500 font-extralight xl:px-25 my-1 text-center">
       We're not just about outfits — we're about attitude. <span className='text-blue-300'>Life</span> brings you fresh, versatile looks designed for modern living. From streetwear to classics, we've got what fits your vibe. Wear what speaks you.we design clothing that cares — for you and the planet. Each fabric, color, and stitch is chosen responsibly, making sustainability our style statement. Look good. Feel good. Do good.
      </p>
    </div>
  )
}
export default About