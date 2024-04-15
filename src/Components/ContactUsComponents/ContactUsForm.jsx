const ContactUsForm = () => {
  return (
    <div className=" w-full lg:h-[34.25rem] lg:w-[32.6rem] rounded-xl flex flex-col p-8 px-12 gap-4 bg-offwhite mix-blend-plus-darker">
      <fieldset className="">
        <input
          type=" email"
          placeholder="Email"
          className="p-4 md:py-6 h-[2.25rem] lg:h-[3.6rem] w-full border-2 border-gradient bg-transparent   "
        />
      </fieldset>
      <fieldset>
        <input
          type=" phone"
          placeholder="Phone number"
          className=" p-4 md:py-6 h-[2.25rem] lg:h-[3.6rem] w-full bg-transparent border-2 border-gradient  "
        />
      </fieldset>
      <fieldset>
        <input
          type="text"
          placeholder="Address"
          className=" p-4 md:py-6 h-[2.25rem] lg:h-[3.6rem] w-full bg-transparent border-2 border-gradient  "
        />
      </fieldset>
      <div>
        <textarea
          type="text"
          placeholder="Message"
          className=" w-full p-4  h-[6.3rem] lg:h-[10rem] border-2 border-gradient "
        />
      </div>
      <button className=" py-2 md:py-4 text-offwhite mt-1 rounded-[4px] bg-black">
        Submit
      </button>
    </div>
  );
};
export default ContactUsForm;
