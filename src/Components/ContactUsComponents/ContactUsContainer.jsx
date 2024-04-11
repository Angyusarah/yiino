import ContactUsForm from "./ContactUsForm";
import GetInTouch from "./GetInTouch";

const ContactUsContainer = () => {
  return (
   
      <div className=" flex flex-col -space-y-20 justify-center bg-gradient">  

        <div className=" p-5 pb-12 md:pt-24 md:h-[56.6rem] flex  bg-cover bg-ContactUsBg h-full bg-no-repeat   ">
          <div className=" w-full md:w-[90rem] flex flex-col md:flex-row  md:ml-72">
          
            <GetInTouch/>
           <ContactUsForm/>
          </div>
        </div>
      </div>
  
   
  );
}

export default ContactUsContainer;