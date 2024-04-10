import image2 from "../assets/images/frame2.png";
import image3 from "../assets/images/frame3.png";
import image4 from "../assets/images/frame4.png";
import mission from "../assets/images/mission.png";
import value from "../assets/images/value.png";
const AboutHero = (props) => {
  return (
    <main className=" px-6 py-10">
      <section className="flex flex-col gap-10 mb- md:mb-[6rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-lightblue w-16 rounded-[4px] text-white h-7 text-center mb-2">
            About
          </div>
          <h2 className="text-headercolor font-bold text-[2rem]">About Us </h2>
          <p className=" text-center text-textcolor text-[18px] md:px-[4rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nulla
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum dolor sit amet consectetur .
          </p>
        </div>
        <div className=" bg-aboutHeroBg h-[12rem]  bg-cover bg-center  md:h-[26rem] rounded-lg "></div>
      </section>
      <section>
        <article className="flex flex-col gap-6 ">
          <div className="flex items-center  justify-center gap-4">
            <img src={mission} alt="" />
            <h2 className="text-headercolor font-bold text-[2rem] ">
              Our Mission
            </h2>
          </div>
          <div className="md:flex md:gap-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              voluptatem asperiores harum culpa ullam. Suscipit vitae quidem
              nostrum! Quaerat aspernatur aliquam fugit fuga deserunt est vitae
              iusto id nisi exercitationem!
            </p>
            <img src={image2} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              fuga tempore facilis qui dolore sequi eum placeat natus ipsa
              incidunt. Quod reiciendis officia eligendi, sit fugit consequuntur
              ratione repellendus qui!
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
export default AboutHero;
