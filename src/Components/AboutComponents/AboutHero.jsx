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
            Yinno champions a future where health, education, and agriculture
            flourish together. We believe healthy individuals form the
            foundation for a thriving agricultural sector. Sustainable
            agricultural practices, in turn, ensure a healthy planet for all.
            Through innovation and collaboration, Yinno empowers communities to
            achieve this interconnected well-being.
          </p>
        </div>
        <div className=" bg-aboutHeroBg h-[12rem]  bg-cover bg-center  md:h-[26rem] rounded-lg "></div>
      </section>
    </main>
  );
};
export default AboutHero;
