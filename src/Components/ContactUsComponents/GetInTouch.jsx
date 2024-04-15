const GetInTouch = () => {
  return (
    <section className=" lg:w-1/2 flex flex-col   text-offwhite justify-center md:px-16 md:text-center md:align-middle">
      <div>
        <div>
          <h3 className=" font-semibold text-4xl">Get in Touch</h3>
          <p className="  pt-4">Lorem ipsum dolor sit amet consectetur ?</p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className=" pt-4 md:pl-32 ">
          <div className=" md:pl-8">
            <div className=" flex gap-4  ">
              <a href="" className=" ">
                <img src="/src/assets/call.svg" alt="" className=" h-6 " />
              </a>
              <a href="" className=" text-lg">
                +2348151582198
              </a>
            </div>

            <div className=" flex pt-2 gap-4">
              <a href="">
                <img src="/src/assets/location.svg" alt="" className=" h-6" />
              </a>
              <a href="" className=" text-lg">
                Jos, Plateau State
              </a>
            </div>
          </div>

          <div className=" py-4 pb-12 flex gap-6 md:gap-16  ">
            <a href="" className=" ">
              <img src="/src/assets/XLogo.svg" className=" w-[2.2rem] md:w-[3.2rem]" />
            </a>
            <a href="">
              <img src="/src/assets/FacebookLogo.svg" className=" w-[2.2rem] md:w-[3.2rem]" />
            </a>
            <a href="">
              <img src="/src/assets/MailLogo.svg" className=" w-[2.2rem] md:w-[3.2rem]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetInTouch;
