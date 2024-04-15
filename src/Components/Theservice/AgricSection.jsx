import React from "react"
import Agricsubhead from "./Agricsubhead"

const AgricSection = () => {
    return (
        <div>
            <Agricsubhead/>

            <div className='flex md:flex-row justify-center items-center '>

            </div>
            <div className='container mx-auto px- py-12 flex flex-col md:flex-row justify-center items-center space-x-20 relative -mt-8'>
                <div class='lg:order-1 lg:mr-2 mb-8 lg:mb-0 relative z-20 text-center'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
                        ipsum quae tenetur totam exercitationem quam architecto nulla <br />
                        sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
                        libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
                        ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
                        illo dolores iure nemo in aspernatur aliquam dignissimos.
                    </p>
                </div>
                <div class='lg:order-2 w-full lg:w-auto relative z-10'>
                    <img class='w-[80%] lg:max-w-[60%]' src="src\assets\images\firstAgricIMG.png" />
                </div>
            </div>


            <div className='container mx-auto px- py-12 flex flex-col md:flex-row justify-center
 items-center space-x-20 relative -mt-8'>
                <div class='lg:order-1 lg:mr-2 mb-8 lg:mb-0 relative z-20 text-center'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
                        ipsum quae tenetur totam exercitationem quam architecto nulla <br />
                        sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
                        libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
                        ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
                        illo dolores iure nemo in aspernatur aliquam dignissimos.
                    </p>
                </div>
                <div class=' w-full lg:w-auto relative z-10'>
                    <img class='w-[80%] lg:max-w-[60%]' src="src\assets\images\2NDagric img.png" />
                </div>
            </div>

            <div className='container mx-auto px- py-12 flex flex-col md:flex-row justify-center
 items-center space-x-20 relative -mt-8'>
                <div class='lg:order-1 lg:mr-2 mb-8 lg:mb-0 relative z-20 text-center'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
                        ipsum quae tenetur totam exercitationem quam architecto nulla <br />
                        sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
                        libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
                        ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
                        illo dolores iure nemo in aspernatur aliquam dignissimos.
                    </p>
                </div>
                <div class='lg:order-2 w-full lg:w-auto relative z-10'>
                    <img class='w-[80%] lg:max-w-[60%]' src="src\assets\images\LastAgric img.png" />
                </div>
            </div>
        </div>
    )
}

export default AgricSection