import {FaArrowRight} from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"
import Cards from "./Cards"
import Data from "./Data"


const Testimonials = () => {
  const cards = Data.map(item => {
    return (
      <Cards
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className=" p-5">
      <h2 className="text-center font-semibold text-2xl py-5">Testimonials</h2>
      <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam, dolor porro blanditiis beatae perspiciatis consequatur cumque, repudiandae, iure exercitationem facilis architecto! Rem adipisci illum amet accusamus quasi incidunt expedita.</p>
      
      <div className=" md:flex justify-between md:w-[100%]">
        <div className="hidden md:flex md:justify-center md:items-center">
            <button className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowLeft/></button>
        </div>
       
        <section className=" md:flex md:flex-row md:gap-5 md:w-[80%] md:overflow-x-scroll"> {cards} </section>
        
        <div className="hidden md:flex md:justify-center md:items-center">
            <button className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowRight/></button>
        </div>
    </div>
    </div>
  )
}

export default Testimonials