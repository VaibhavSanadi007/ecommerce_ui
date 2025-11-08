const SearchItemSkeleton = ({items}) => {
  return (
     <div className="xl:h-80  flex flex-col gap-4 font-light ">
      <div className="h-[80%] w-full relative overflow-hidden group"  >
        <div className="h-full w-full animate-pulse bg-gray-400"/>
    </div>
      <h1 className="h-[5%] flex items-center justify-center ">
        xyz
      </h1>
      <h1 className="h-[5%] flex items-center justify-center  ">
        &#8377;{items}00.00
      </h1>
    </div>
  )
}
export default SearchItemSkeleton