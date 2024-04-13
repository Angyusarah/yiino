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
          dolor sit amet consectetur adipisicing elit. Officia exercitationem
          debitis alias repudiandae sed et animi dolores reiciendis similique
          magni ducimus in velit cumque, consequatur odit
        </p>

        <div className=" flex flex-col gap-6">
          <div className="pb-6 lg:flex  ">
            <div className=" lg:mt-6 ">
              <h3 className=" text-headercolor font-bold">Excellence:</h3>
              <p className=" lg:pr-[8rem]">
                dolor sit amet consectetur adipisicing elit. Officia
                exercitationem debitis alias repudiandae sed et animi dolores
                reiciendis similique magni ducimus in velit cumque, consequatur
                exercitationem debitis alias repudiandae sed et animi dolores
                odit repellat dolorum
              </p>
            </div>
            <img src={image3} className=" pt-6 md:w-full " alt="image" />
          </div>
          <div className=" lg:absolute lg:top-[17rem] lg:right-[34em]">
            <h3 className=" text-headercolor font-bold">Creativity:</h3>
            <p className=" lg:pr-[8rem]">
              dolor sit amet consectetur adipisicing elit. Officia
              exercitationem debitis alias repudiandae sed et animi doloresdolor
              sit amet consectetur adipisicing elit. Officia exercitationem
              debitis alias repudiandae sed et animi dolores reiciendis
              exercitationem debitis alias repudiandae sed et animi dolores
              exercitationem debitis alias repudiandae sed et animi dolores
              exercitationem debitis alias repudiandae sed et animi dolores
              similique
            </p>
          </div>
          <div className=" mt-6 lg:absolute lg:bottom-[15rem] lg:left-[36rem] lg:pl-16">
            <h3 className=" text-headercolor font-bold">Integrity:</h3>
            <p className=" lg:pr-[8rem]">
              dolor sit amet consectetur adipisicing elit. Officia
              exercitationem debitis alias repudiandae sed et animi doloresdolor
              sit amet consectetur adipisicing elit. Officia exercitationem
              debitis alias repudiandae sed et animi dolores reiciendis
              similique
            </p>
          </div>
          <div className=" lg:flex lg:gap-4  ">
            <img src={image4} className=" pt-6 md:w-full " alt="image" />
            <div className=" pt-6 lg:pt-[13rem] lg:pl-24">
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

export default Valuecard;
