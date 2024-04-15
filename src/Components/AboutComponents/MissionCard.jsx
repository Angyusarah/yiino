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
          Yinno is on a mission to empower communities by fostering innovation
          and collaboration at the intersection of agriculture, education, and
          health.
        </p>
        <img src={image2} className="" alt="" />
        <p>
          At the heart of a flourishing agricultural sector lies a healthy and
          knowledgeable population. Just as fertile soil nourishes crops, a
          society invested in well-being cultivates a skilled agricultural
          workforce. By fostering education and access to healthcare, we empower
          individuals to contribute their talents and knowledge to the land. In
          turn, a sustainable agricultural system becomes the cornerstone of a
          healthy future. By adopting practices that nurture the environment
          alongside our crops, we ensure food security and a thriving planet for
          generations to come.
        </p>
      </div>
    </section>
  );
};

export default MissionCard;
