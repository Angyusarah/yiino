import React from "react";
import Footer from "../Components/Footer";
import ContactUsForm from "../Components/ContactUsComponents/ContactUsForm";
import GetInTouch from "../Components/ContactUsComponents/GetInTouch";

function ContactPage() {
  return (
    <div>
      <div className=" flex flex-col -space-y-20 justify-center">
        <div className=" bg-gradient-to-t from-gradient to-offwhite h-[40.25rem] mix-blend-plus-darker">
          <div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ipsum quibusdam! Consectetur eligendi animi,
            </p>
          </div>
        </div>

        <div className=" p-5 pb-12 md:pt-24 md:h-[56.6rem] flex  bg-cover bg-ContactUsBg h-full bg-no-repeat   ">
          <div className=" w-full md:w-[90rem] flex flex-col md:flex-row  md:ml-72">
            <GetInTouch/>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
