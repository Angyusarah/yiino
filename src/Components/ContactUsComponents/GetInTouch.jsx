const GetInTouch = () => {
  return (
    <section className=" md:w-1/2 flex flex-col   text-offwhite justify-center">
      <div>
        <div>
          <h3 className=" font-semibold text-4xl">Get in Touch</h3>
          <p className="  pt-4">Lorem ipsum dolor sit amet consectetur ?</p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className=" pt-4 ">
          <div>
            <div className=" flex gap-4">
              <a href="">
                <img src="/src/assets/call.svg" alt="" className=" h-6" />
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

          <div className=" py-4 pb-12 flex gap-6 ">
            <a href="">
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
