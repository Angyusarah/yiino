import image3 from "../../assets/images/frame3.png";
import image4 from "../../assets/images/frame4.png";
import value from "../../assets/images/value.png";

const Valuecard = () => {
  return (
    <section className="mb-8 px-6  pb-9 flex flex-col gap-6">
      <div className="flex items-center  justify-center md:mr-12 gap-4 mt-9">
        <img src={value} alt="mission image" />
        <h2 className="text-headercolor font-bold text-[2rem]  ">Our Values</h2>
      </div>
      <div className=" flex flex-col gap-6 lg relative md:gap-14 ">
        <p className="lg:text-center lg:px-12">
          Yinno's website will be a one-stop hub connecting individuals,
          organizations, and initiatives working in the fields of agriculture,
          education, and health. It will offer a variety of resources,
          including:
        </p>

        <div className=" flex flex-col gap-6">
          <div className="pb-6 lg:flex  ">
            <div className=" lg:mt-6 ">
              <h3 className=" text-headercolor font-bold">Excellence:</h3>
              <p className=" lg:pr-[8rem]">
                Excellence is our mission. We are unwavering in our commitment
                to delivering the highest quality resources, programs, and
                services. Our dedication ensures exceptional value for those we
                serve, empowering them to achieve their full potential.
              </p>
            </div>
            <img src={image3} className=" pt-6 md:w-full " alt="image" />
          </div>
          <div className=" lg:absolute lg:top-[17rem] lg:right-[34em]">
            <h3 className=" text-headercolor font-bold">Creativity:</h3>
            <p className=" lg:pr-[8rem]">
              In a world facing complex challenges, we believe innovation is
              key. We champion fresh perspectives and creative solutions,
              fostering an environment where bold ideas can flourish. Together,
              we can address global challenges and build a brighter future.
            </p>
          </div>
          <div className=" mt-6 lg:absolute lg:bottom-[23rem] lg:left-[46rem] lg:pl-16">
            <h3 className=" text-headercolor font-bold">Integrity:</h3>
            <p className=" lg:pr-[8rem]">
              Integrity is our guiding principle. In every endeavor we
              undertake, we hold ourselves to the strictest ethical standards.
              Fairness, honesty, and transparency are at the core of our
              decisions, ensuring a positive impact on all stakeholders.
            </p>
          </div>
          <div className=" lg:flex lg:gap-4  ">
            <img src={image4} className=" pt-6 md:w-full " alt="image" />
            <div className=" pt-6 lg:pt-[13rem] lg:pl-24">
              <h3 className="text-headerColor font-bold">Customer Focus:</h3>
              <p className=" lg:pr-[4rem]">
                We prioritize the needs of our communities by investing in youth
                development programs, providing job training opportunities, and
                supporting initiatives that promote environmental
                sustainability. This allows us to create a positive impact on
                their lives and build a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valuecard;
