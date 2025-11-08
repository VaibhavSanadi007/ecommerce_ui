import img3 from '../assets/img3.jpg';
import img2 from '../assets/img2.jpg';
import img1 from '../assets/img1.jpg';

const Caraousel = () => {
  return (
    <div className="xl:h-120 bg-gray-100 overflow-hidden  ">
        <div className="xl:h-full  flex flex-nowrap animate-slide">
        <img className="w-full shrink-0 " src={img1}/>
        <img className="i1 w-full shrink-0 object-cover" src={img3} />
        <img className="i2 w-full shrink-0 object-cover" src={img2} />
        </div>
      </div>
  )
}
export default Caraousel