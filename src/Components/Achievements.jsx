const Achievements = () => {
  return (
    <div className=" bg-footerblue p-6 flex gap-5 text-white md:flex-col md:px-20 md:py-10">
        <div className="grid items-center w-[40%] font-semibold">
            <h3>Our Achievements in Numbers</h3>
        </div>

        <div className="grid gap-5 grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
            <div className="border-t-[2px] p-2">
                <h4 className=" font-bold">5.6k</h4>
                <p className=" text-xs">Lorem, ipsum.</p>
            </div>

            <div className="border-t-[2px] py-2">
                <h4 className=" font-bold">1.1k</h4>
                <p className=" text-xs">Lorem, ipsum.</p>
            </div>

            <div className="border-t-[2px] py-2">
                <h4 className=" font-bold">100+</h4>
                <p className=" text-xs">Lorem, ipsum.</p>
            </div>

            <div className="border-t-[2px] py-2">
                <h4 className=" font-bold">11</h4>
                <p className=" text-xs">Lorem, ipsum.</p>
            </div>
        </div>
    </div>
  )
}

export default Achievements