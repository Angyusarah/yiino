import education from "../assets/images/education.png"
import health from "../assets/images/health.png"
import agric from "../assets/images/agric.png"

const KeyserviceCard = () => {
  return (
    <div className=" md:flex gap-5">
        <div className="flex flex-col justify-center items-center px-5 py-8 my-5 border rounded shadow-sm">
            <div className=" bg-lightblue rounded-full w-[75px] p-[8px] my-3">
                <img src={education} alt="education image" />
            </div>
           
            <div className="flex flex-col justify-start items-start">
            <h3 className=" font-semibold text-xl py-2">Education</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, amet natus. Maiores commodi molestias omnis ab fugit a, neque aperiam!</p>
            </div>
            <link rel="stylesheet" href="" />
        </div>

        <div className="flex flex-col justify-center items-center px-5 py-8 my-5 border rounded shadow-sm">
            <div className=" bg-lightblue rounded-full w-[75px] p-[8px] my-3">
                <img src={health} alt="health image" />
            </div>
           
            <div className="flex flex-col justify-start items-start">
            <h3 className=" font-semibold text-xl py-2">Health</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, amet natus. Maiores commodi molestias omnis ab fugit a, neque aperiam!</p>
            </div>
            <link rel="stylesheet" href="" />
        </div>

        <div className="flex flex-col justify-center items-center px-5 py-8 my-5 border rounded shadow-sm">
            <div className=" bg-lightblue rounded-full w-[75px] p-[8px] my-3">
                <img src={agric} alt="agric image" />
            </div>
           
            <div className="flex flex-col justify-start items-start">
            <h3 className=" font-semibold text-xl py-2">Agriculture</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, amet natus. Maiores commodi molestias omnis ab fugit a, neque aperiam!</p>
            </div>
            {/* <link to="/">Learn more</link> */}
        </div>
    </div>
  )
}

export default KeyserviceCard