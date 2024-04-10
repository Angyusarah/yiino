const Footer = () => {
  return (
    <footer className="flex flex-col bg-footerblue text-center py-5 text-white md:flex-row md:gap-20 md:px-17">
        <div className="my-5 md:flex md:justify-center md:items-center">
            <h4 className="font-semibold text-[44px] text-navyblue md:w-[10%]">LOGO</h4>
        </div>

        <div className="md:flex md:justify-between md:text-left md:w-[75%]">
        <div  className="my-8">
            <h6 className=" text-navyblue text-xl my-3">About Us</h6>
            <ul className="flex flex-col gap-1">
                <li>Aout Yiino Technlogy</li>
                <li>Privavy Policy</li>
                <li>Cookie Policy</li>
                <li>Copyright Infringement Policy</li>
            </ul>
        </div>

        <div className="my-8">
            <h6 className=" text-navyblue text-xl my-3">Support</h6>
            <ul className="flex flex-col gap-1">
                <li>support@YiinoTechnology.ng</li>
                <li>Contact Us</li>
                <li>FAQ</li>
            </ul>
        </div>

        <div className="my-8">
            <h6 className=" text-navyblue text-xl my-3">Our Resources</h6>
            <ul className="flex flex-col gap-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Twitter</li>
            </ul>
        </div>
        </div>
       
        
    </footer>
  )
}

export default Footer