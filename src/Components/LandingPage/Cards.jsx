import star from "../../assets/images/Star.png"
import diana from "../../assets/images/diana.png"

const Cards = (props) => {
  console.log(`../assets/images/diana.png`)
  const imgPath = "`../assets/images/diana.png`"
    return (
      <div className="flex flex-col px-5 py-8 my-5 border rounded-xl shadow-sm md:min-w-[32%] md:py-5">
          <img className=" w-[50%] h-10" src={`../assets/images/${props.item.coverImg}`} alt="" />
          <div className="flex justify-between">
            <h3 className=" font-semibold text-xl py-2">{props.item.title}</h3>
            <div className="flex gap-1 h-[90%] py-4">
              <span>({props.item.rating}.0)</span>
              <img className="" src={star} alt="" />
            </div>
          </div>
          <p className="text-xs">{props.item.description}</p>
      </div>
    )
  
  }
  
  export default Cards