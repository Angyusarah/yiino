import image2 from "../../assets/images/frame2.png";
import image3 from "../../assets/images/frame3.png";
import image4 from "../../assets/images/frame4.png";
import mission from "../../assets/images/mission.png";
import value from "../../assets/images/value.png";

const AboutCard = () => {
  return (
    <section className=" px-6  pb-9 flex flex-col gap-6  ">
      <div className="flex items-center  justify-center md:mr-12 lg:pr-10 gap-4">
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
        <img src={image2} alt="" />
        <p>
          dolor sit amet consectetur adipisicing elit. Officia exercitationem
          debitis alias repudiandae sed et animi dolores reiciendis similique
          magni ducimus in velit cumque, consequatur odit repellat dolorum dolor
          sit amet consectetur adipisicing elit. Officia exercitationem debitis
          alias repudiandae sed et animi dolores reiciendis similique magni
          ducimus in velit cumque, consequatur odit repellat dolorum
        </p>
      </div>
      <div className="flex items-center  justify-center md:mr-12 gap-4 mt-9">
        <img src={value} alt="mission image" />
        <h2 className="text-headercolor font-bold text-[2rem]  ">Our Values</h2>
      </div>
      <div className=" flex flex-col gap-6 lg relative md:gap-14 ">
        <p className="lg:text-center lg:px-12">
          dolor sit amet consectetur adipisicing elit. Officia exercitationem
          debitis alias repudiandae sed et animi dolores reiciendis similique
          magni ducimus in velit cumque, consequatur odit
        </p>

        <div className=" flex flex-col gap-6">
          <div className="pb-6 lg:flex lg:gap-1 ">
            <div className=" lg:mt-6 ">
              <h3 className=" text-headercolor font-bold">Excellence:</h3>
              <p className=" lg:pr-[8rem]">
                dolor sit amet consectetur adipisicing elit. Officia
                exercitationem debitis alias repudiandae sed et animi dolores
                reiciendis similique magni ducimus in velit cumque, consequatur
                odit repellat dolorum
              </p>
            </div>
            <img src={image3} className=" pt-6 md:w-full lg:w-[30rem]" alt="image" />
          </div>
          <div className=" lg:absolute lg:top-[17rem] lg:right-[34em]">
            <h3 className=" text-headercolor font-bold">Creativity:</h3>
            <p className=" lg:pr-[8rem]">
              dolor sit amet consectetur adipisicing elit. Officia
              exercitationem debitis alias repudiandae sed et animi doloresdolor
              sit amet consectetur adipisicing elit. Officia exercitationem
              debitis alias repudiandae sed et animi dolores reiciendis
              similique
            </p>
          </div>
          <div className=" mt-6 lg:absolute lg:bottom-[15rem] lg:left-[39rem] lg:pl-16">
            <h3 className=" text-headercolor font-bold">Integrity:</h3>
            <p className=" lg:pr-[8rem]">
              dolor sit amet consectetur adipisicing elit. Officia
              exercitationem debitis alias repudiandae sed et animi doloresdolor
              sit amet consectetur adipisicing elit. Officia exercitationem
              debitis alias repudiandae sed et animi dolores reiciendis
              similique
            </p>
          </div>
          <div className=" lg:flex lg:gap-12  ">
            <img src={image4} className=" pt-6 md:w-full" alt="image" />
            <div className=" pt-6 lg:pt-[13rem] lg:pl-28">
              <h3 className="text-headerColor font-bold">Customer Focus:</h3>
              <p className=" lg:pr-[4rem]">
                dolor sit amet consectetur adipisicing elit. Officia
                exercitationem debitis alias repudiandae sed et animi dolores
                dolor sit amet consectetur adipisicing elit. Officia
                exercitationem debitis alias repudiandae sed et animi dolores
                reiciendis similique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
