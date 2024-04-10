import Cards from "./Cards"
import Data from "./Data"
import {FaArrowRight} from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"
import "../index.css"

const Testimonialsblock = () => {
    const cards = Data.map(item => {
        return (
          <Cards
            key = {item.id}
            item = {item}
          />
        )
      })
  return (
    <div className=" md:flex justify-between md:w-[100%]">
        <div className="hidden md:block md:flex md:justify-center md:items-center">
            <div className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowLeft/></div>
        </div>
       
        <section className=" md:flex md:flex-row md:gap-5 md:w-[80%] md:overflow-x-scroll"> {cards} </section>
        
        <div className="hidden md:block md:flex md:justify-center md:items-center">
            <div className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowRight/></div>
        </div>
    </div>
  )
}

export default Testimonialsblock