import React from 'react'
import { assets } from '../assets/assets'
import{Link} from 'react-router-dom'

const HeroTwo = () => {
 
  return (
    <div>

    <div className='flex flex-col md:flex-row items-center bg-green-50 rounded-lg px-6 md:px-10 lg:px-20 py-16 gap-8 mt-5'>
      <div className='w-full md:w-1/2'>
        <img className='w-full h-auto rounded-lg' src={assets.headerTwo_img} alt="" />
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-secondary font-semibold'>
          Your Partner In Health and Wellness
        </p>
        <p className='text-base md:text-lg lg:text-xl  font-light leading-relaxed max-w-full md:max-w-[80%]'>
          We are dedicated to delivering outstanding physiotherapy treatment in a warm and supportive environment. Our approach focuses on treating the whole person, not just addressing the symptoms.
        </p>
        <Link to='/services'><p 
          className='flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300' 
          href=""
        >
          Learn More 
          <img className='w-3' src={assets.arrow_icon} alt="" />
        </p></Link>
      </div>
    </div>
    <section className="mt-5 bg-blue-50 py-10 px-5 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            You can also consult us for{" "}
            <span className="text-secondary">Sport Massage Therapy</span>
          </h3>
          <p className="text-gray-600 mt-3 text-lg leading-relaxed">
            Our professional physiotherapists provide personalized sport massage 
            therapy to help you recover, relax, and enhance performance. Whether 
            you're an athlete or just need relief from muscle tension, we've got 
            you covered!
          </p>
          <Link to='/appointment'><button className="mt-5 bg-secondary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
            Book an Appointment
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center ">
          <img
            src={assets.relaxation}
            alt="Sport Massage"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroTwo
