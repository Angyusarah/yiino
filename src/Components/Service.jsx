import React from 'react'
import Agricsubhead from './Theservice/Agricsubhead'
import { EducationSection } from './Theservice/EducationSection'
import HealthSection from './Theservice/HealthSection'
import AgricSection from './Theservice/AgricSection'


function Service() {
  return (
    <div className=' flex-wrap justify-center overflow-x-hidden'>


      <section className='text-2xl font-bold mt-7 text-center'>
        <h2>Our Services</h2>
      </section>
      <div className='text-center'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          natus rem! Dolore vero ipsa, unde, porro molestiae, ad <br />
          reprehenderit voluptatem fugit nemo eveniet error delectus eligendi
          facere sapiente similique corrupti?</p>
      </div>

      <div class='flex justify-center items-center'>
        <div class='flex flex-row items-center space-x-8 lg:space-x-20'>

          <div class='flex flex-col items-center mt-9'>
            <div class='rounded-full bg-lightblue p-3'>
              <img class='w-14 h-14' src="src\assets\images\education.png" />
            </div>
            <p class='text-2xl font-bold mt-7'>Education</p>
          </div>

          <div class='flex flex-col items-center mt-9'>
            <div class='rounded-full bg-lightblue p-3'>
              <img class='w-14 h-14' src="src\assets\images\health.png" />
            </div>
            <p class='text-2xl font-bold mt-7'>Health</p>
          </div>

          <div class='flex flex-col items-center mt-9'>
            <div class='rounded-full bg-lightblue p-3'>
              <img class='w-14 h-14' src="src\assets\images\agric.png" />
            </div>
            <p class='text-2xl font-bold mt-7'>Agriculture</p>
          </div>
        </div>
      </div>


      <EducationSection />
      <HealthSection />
      <AgricSection />
    </div>



  )
}

export default Service





