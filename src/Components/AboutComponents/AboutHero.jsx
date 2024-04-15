const AboutHero = () => {
  return (
    <main className=" px-6 py-10">
      <section className="flex flex-col gap-10 mb- md:mb-[6rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-lightblue w-16 rounded-[4px] text-white h-7 text-center mb-2">
            About
          </div>
          <h2 className="text-headercolor font-bold text-[2rem]">About Us </h2>
          <p className=" text-center text-textcolor text-[18px] md:px-[5rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nulla
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum dolor sit amet consectetur .
          </p>
        </div>
        <div className=" bg-aboutHeroBg h-[12rem]  bg-cover bg-center  md:h-[26rem] rounded-lg "></div>
      </section>
    </main>
  );
};
export default AboutHero;
