import image2 from "../../assets/images/frame2.png";
import mission from "../../assets/images/mission.png";

const MissionCard = () => {
  return (
    <section className=" px-6  pb-9 flex flex-col gap-6  ">
      <div className="flex items-center  justify-center md:mr-12  gap-4">
        <img src={mission} alt="mission image" />
        <h2 className="text-headercolor font-bold text-[2rem]  ">
          Our Mission
        </h2>
      </div>
      <div className=" flex flex-col gap-6 lg:flex-row relative md:gap-14 ">
        <p className=" lg:absolute md:top-[9rem]  lg:left-[34rem]">
          dolor sit amet consectetur adipisicing elit. Officia exercitationem
          debitis alias repudiandae sed et animi dolores reiciendis similique
          magni ducimus in velit cumque, consequatur odit repellat dolorum
        </p>
        <img src={image2} className="" alt="" />
        <p>
          dolor sit amet consectetur adipisicing elit. Officia exercitationem
          debitis alias repudiandae sed et animi dolores reiciendis similique
          magni ducimus in velit cumque, consequatur odit repellat dolorum dolor
          sit amet consectetur adipisicing elit. Officia exercitationem debitis
          alias repudiandae sed et animi dolores reiciendis similique magni
          ducimus in velit cumque, consequatur odit repellat dolorum
        </p>
      </div>
    </section>
  );
};

export default MissionCard;
