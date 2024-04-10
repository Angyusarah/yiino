const Hero = () => {
    return (
      <div className="flex flex-col justify-center items-center bg-offwhite w-full">
        <div className=" w-full h-10 bg-red-500"></div>
        <div className="bg-heroBg bg-center bg-[length:100%_100%]  flex justify-center  items-center  h-[400px] w-full">
          <div className=" text-center ">
            <div className="my-5">
              <h1 className=" text-headercolor font-bold text-2xl" >Lorem ipsum dolor sit amet consectetur.</h1>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel accusamus laboriosam quisquam debitis!</p>
            </div>
              <button className=" bg-black text-white px-5 py-2 rounded-md">Contact Us</button>
          </div>
      </div>
      </div>
    )
  }
  
  export default Hero